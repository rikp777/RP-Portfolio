<template>
    <div class="container mx-auto px-4">
        <div class="mx-auto m-5" >
            <div class="form-control mx-auto">
                <label class="label">
                    <span class="label-text">Grid size</span>
                </label>
                <div class="input-group">
                    <input
                          type="number"
                          placeholder="Grid size"
                          class="input input-bordered"
                          :min="2"
                          :max="100"
                          v-model.lazy="inputGridSize"
                          @change="updateGridSize"
                          v-if="!state.running"
                    />
                    <button class="btn" @click="initGrid"  v-if="!state.running">Randomize</button>
                    <button class="btn" @click="toggle()"  v-if="!state.running">Toggle</button>
                    <button class="btn" :class="{
                        'btn-success': searchDelay,
                        'btn-error': !searchDelay
                    }" @click="searchDelay = !searchDelay"  v-if="!state.running">Search delay</button>
              </div>
            </div>
        </div>
        <hr>
        <div
                class="mx-auto grid grid-flow-row-dense w-96 h-96 m-5"
                :style="`grid-template-columns: repeat(${inputGridSize}, 1fr); grid-template-rows: repeat(${inputGridSize}, 1fr);`"
        >
            <div
                  v-for="(cell, index) in state.grid"
                  :key="index"
                  class="cell "
                  :class="{
                      'bg-green-500': cell.type === 'start',
                      'bg-red-500': cell.type === 'end',
                      'bg-gray-700': cell.type === 'obstacle',
                      'bg-gray-600': cell.type == 'letter' && !cell.visited,
                      'bg-blue-500': cell.visited,
                      'bg-orange-500': cell.searched && !cell.visited,
                      'hover:bg-primary hover:cursor-pointer': !cell.visited && cell.type !== 'obstacle' && !state.running
                  }"
                  @click="cellClicked(cell)"
            >

            </div>


        </div>
        <span v-if="state.grid.length > 0">
            Path length: {{state.grid.length}} <br>
            Loops: {{state.loops}}
        </span>
        <br>
        <span v-if="state.running">Running...</span>

        <div class="mt-3">
            <div class="alert alert-error" v-if="state.grid.length === 0 && !state.running">
                No path found
            </div>
            <div class="alert alert-info" v-if="inputGridSize > 50">
                Dont make the field too big, it will take a while to calculate the path.
                Your client might freeze.
                <span v-if="state.loops > 350">
                    You have reached the limit of 350 loops. The path is probably too long.
                    You will need to be patient. Or you can try to make the field smaller.
                </span>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import {ref, onMounted, reactive, toRefs, computed} from 'vue';
import {input} from "sucrase/dist/types/parser/traverser/base";

interface Cell {
    x: number;
    y: number;
    type: string;
    visited: boolean;
    searched: boolean;
}
const inputGridSize = ref(10)
const useNoise = ref(true)
const searchDelay = ref(true)
const state = ref({
    grid: [] as Cell[],
    running: false,
    path: [] as Cell[],
    loops: 0,
});


function getCellStyles(cell: Cell): object {
    const size = `${(100 / inputGridSize.value).toFixed(2)}%`;
    // console.log(size);
    const transitionDelay = `${(cell.y * inputGridSize.value + cell.x) * 25}ms`;
    return {
        width: 'w-5',
        height: 'h-5',
        transitionDelay: '3ms',
    };
}
const gridContainerStyles = computed(() => {
    return {
        gridTemplateColumns: `repeat(${inputGridSize.value}, 1fr)`,
        gridTemplateRows: `repeat(${inputGridSize.value}, 1fr)`,
        width: '100%',
        paddingBottom: '100%',
        position: 'relative',
    };
});

function updateGridSize(){
    initGrid();
}

function toggle(){
    useNoise.value = !useNoise.value;
    initGrid();
}

async function cellClicked(cell: Cell): Promise<void> {
    if (cell.type !== 'start' && cell.type !== 'end' && cell.type != 'obstacle' && !state.value.running) {

        const prevEnd = state.value.grid.find((gridCell) => gridCell.type === 'end');
        if (prevEnd) {
            prevEnd.type = 'empty';
        }
        cell.type = 'end';
        state.value.grid.forEach((gridCell: { type: string; }) => {
            if (gridCell.type === 'visited') {
                gridCell.type = 'empty';
            }
        });
        state.value.running = true;
        await resetGrid();
        await visualizeAStar(0, 0, cell.x, cell.y);
        state.value.running = false;
    }

}

function heuristic(nodeA: Cell, nodeB: Cell): number {
    // Use the Manhattan distance heuristic for grid-based scenarios
    return Math.abs(nodeB.x - nodeA.x) + Math.abs(nodeB.y - nodeA.y);
}
async function aStarSearch(startX: number, startY: number, endX: number, endY: number): Promise<Cell[]> {
    const delay = 0.2;
    const openSet: Cell[] = [state.value.grid[startY * inputGridSize.value + startX]];
    const cameFrom: { [key: number]: Cell } = {};
    const gScore: { [key: number]: number } = {};
    const fScore: { [key: number]: number } = {};

    state.value.grid.forEach((node: Cell) => {
        gScore[node.y * inputGridSize.value + node.x] = Infinity;
        fScore[node.y * inputGridSize.value + node.x] = Infinity;
    });

    gScore[startY * inputGridSize.value + startX] = 0;
    fScore[startY * inputGridSize.value + startX] = heuristic(state.value.grid[startY * inputGridSize.value + startX], state.value.grid[endY * inputGridSize.value + endX]);

    while (openSet.length > 0) {
        state.value.loops++;
        let currentNode = openSet.reduce((lowest, node) => (fScore[node.y * inputGridSize.value + node.x] < fScore[lowest.y * inputGridSize.value + lowest.x] ? node : lowest), openSet[0]);

        if (currentNode.x === endX && currentNode.y === endY) {
            return reconstructPath(cameFrom, currentNode);
        }

        openSet.splice(openSet.indexOf(currentNode), 1);

        const neighbors = [
            { x: currentNode.x, y: currentNode.y - 1 },
            { x: currentNode.x, y: currentNode.y + 1 },
            { x: currentNode.x - 1, y: currentNode.y },
            { x: currentNode.x + 1, y: currentNode.y },
        ];

        for (const neighbor of neighbors) {
            if (
                neighbor.x >= 0 &&
                neighbor.x < inputGridSize.value &&
                neighbor.y >= 0 &&
                neighbor.y < inputGridSize.value
            ) {
                const cell: Cell = state.value.grid[neighbor.y * inputGridSize.value + neighbor.x];
                if (cell.type === 'obstacle') {
                    continue;
                }
                const tentativeGScore = gScore[currentNode.y * inputGridSize.value + currentNode.x] + 1;

                if (tentativeGScore < gScore[neighbor.y * inputGridSize.value + neighbor.x]) {
                    cameFrom[neighbor.y * inputGridSize.value + neighbor.x] = currentNode;
                    gScore[neighbor.y * inputGridSize.value + neighbor.x] = tentativeGScore;
                    fScore[neighbor.y * inputGridSize.value + neighbor.x] = gScore[neighbor.y * inputGridSize.value + neighbor.x] + heuristic(state.value.grid[neighbor.y * inputGridSize.value + neighbor.x], state.value.grid[endY * inputGridSize.value + endX]);

                    if (!openSet.some((node) => node.x === neighbor.x && node.y === neighbor.y)) {
                        const updatedNeighbor: Cell = { ...state.value.grid[neighbor.y * inputGridSize.value + neighbor.x], searched: true };
                        state.value.grid.splice(neighbor.y * inputGridSize.value + neighbor.x, 1, updatedNeighbor);

                        await visualizeCell(updatedNeighbor, delay);

                        openSet.push(state.value.grid[neighbor.y * inputGridSize.value + neighbor.x]);
                    }
                }
            }
        }
    }

    // Path not found
    return [];
}

async function visualizeCell(cell: Cell, delay: number) {
    if(searchDelay.value){
        return new Promise((resolve) => {
            setTimeout(() => {
                const updatedCell = { ...cell, visited: false };
                state.value.grid.splice(cell.y * inputGridSize.value + cell.x, 1, updatedCell);
                resolve(null);
            }, 0);
        });
    } else {
        const updatedCell = { ...cell, visited: false };
        state.value.grid.splice(cell.y * inputGridSize.value + cell.x, 1, updatedCell);
    }
}


function reconstructPath(cameFrom: { [key: number]: Cell }, current: Cell): Cell[] {
    const path: Cell[] = [current];
    while (cameFrom[current.y * inputGridSize.value + current.x]) {
        current = cameFrom[current.y * inputGridSize.value + current.x];
        path.unshift(current);
    }
    return path;
}

async function visualizeAStar(startX: number, startY: number, endX: number, endY: number): Promise<void> {
    const path = aStarSearch(startX, startY, endX, endY);
    for (const node of await path) {
        // Update the cell in the grid by creating a new cell object with the updated visited property
        const updatedCell: Cell = {...state.value.grid[node.y * inputGridSize.value + node.x], visited: true};
        state.value.grid.splice(node.y * inputGridSize.value + node.x, 1, updatedCell);

        if (searchDelay.value) {
            if (inputGridSize.value > 100) {
                await new Promise((resolve) => setTimeout(resolve, 50));
            } else {
                await new Promise((resolve) => setTimeout(resolve, 50));
            }
        } else {
            await new Promise(resolve => setTimeout(resolve, 1));
        }
    }

}

function spellNameInGrid() {
    const name = 'RIK';
    const offsetX = Math.round(inputGridSize.value / 2 - name.length * 2);
    const offsetY = Math.round(inputGridSize.value / 2 - name.length * 2);

    const letterR = [
        [0, 0], [1, 0], [2, 0], [3, 0],
        [0, 1],                         [4, 1],
        [0, 2], [1, 2], [2, 2], [3, 2],
        [0, 3],                         [4, 3],
        [0, 4],                         [4, 4]
    ];

    const letterI = [
        [1, 0], [2, 0], [3, 0],
                [2, 1],
                [2, 2],
                [2, 3],
        [1, 4], [2, 4], [3, 4]
    ];

    const letterK = [
        [0, 0],         [2, 0],
        [0, 1],         [2, 1],
        [0, 2], [1, 2],
        [0, 3],         [2, 3],
        [0, 4],         [2, 4]
    ];

    const letters = [letterR, letterI, letterK];
    const letterSpacing = 5;

    for (let l = 0; l < name.length; l++) {
        const letter = letters[l];
        for (const cell of letter) {
            const x = offsetX + l * letterSpacing + cell[0];
            const y = offsetY + cell[1];
            const gridIndex = y * inputGridSize.value + x;
            state.value.grid[gridIndex].type = 'letter';
        }
    }
}

function initGrid() {
    if(useNoise.value){
        gridNoice();
    }else{
        gridMaze();
    }
}

function gridNoice(){
    state.value.grid = [];
    for (let y = 0; y < inputGridSize.value; y++) {
        for (let x = 0; x < inputGridSize.value; x++) {
            const type = y === 0 && x === 0 ? 'start' : Math.random() < 0.2 ? 'obstacle' : 'empty';
            state.value.grid.push({
                x, y, type, visited: false,
                searched: false
            });
        }
    }

    if(inputGridSize.value > 20){
        spellNameInGrid();
    }
}

async function gridMaze() {
    state.value.grid = [];

    // Initialize the grid with walls
    for (let y = 0; y < inputGridSize.value; y++) {
        for (let x = 0; x < inputGridSize.value; x++) {
            const type = (x === 0 && y === 0) ? 'start' : 'obstacle';
            state.value.grid.push({
                x, y, type, visited: false,
                searched: false
            });
        }
    }

    function isInsideGrid(x: number, y: number) {
        return x >= 0 && x < inputGridSize.value && y >= 0 && y < inputGridSize.value;
    }

    function getUnvisitedNeighbors(x: number, y: number) {
        const neighbors = [
            { x: x, y: y - 2 },
            { x: x, y: y + 2 },
            { x: x - 2, y: y },
            { x: x + 2, y: y },
        ];

        return neighbors.filter(neighbor => isInsideGrid(neighbor.x, neighbor.y) && !state.value.grid[neighbor.y * inputGridSize.value + neighbor.x].visited);
    }

    async function dfs(x: number, y: number) {
        const currentCell = state.value.grid[y * inputGridSize.value + x];
        currentCell.type = 'empty';
        currentCell.visited = true;

        const neighbors = getUnvisitedNeighbors(x, y);

        while (neighbors.length > 0) {
            const randomIndex = Math.floor(Math.random() * neighbors.length);
            const nextNeighbor = neighbors[randomIndex];

            if (!state.value.grid[nextNeighbor.y * inputGridSize.value + nextNeighbor.x].visited) {
                const wallX = (x + nextNeighbor.x) / 2;
                const wallY = (y + nextNeighbor.y) / 2;
                state.value.grid[wallY * inputGridSize.value + wallX].type = 'empty';

                await dfs(nextNeighbor.x, nextNeighbor.y);
            }

            neighbors.splice(randomIndex, 1);
        }
    }

    // Begin DFS from (1, 1)
    await dfs(1, 1);
    // Connect the starting point (0, 0) to the maze
    state.value.grid[1].type = 'empty';
    resetGrid();
    state.value.running = false;
}


function resetGrid(){
    state.value.loops = 0;
    for (let y = 0; y < inputGridSize.value; y++) {
        for (let x = 0; x < inputGridSize.value; x++) {
            state.value.grid[y * inputGridSize.value + x].visited = false;
            state.value.grid[y * inputGridSize.value + x].searched = false;
        }
    }
}

onMounted(() => {
    initGrid();
});

// const { grid } = toRefs(state);
</script>

<style scoped>
.cell {
    @apply transition-all duration-300 ease-in;
}
</style>