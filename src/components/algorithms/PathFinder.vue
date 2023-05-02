<template>
    <div class="container mx-auto bg-base-300 p-5">
        <input type="file" @change="loadImage" accept="image/png, image/jpeg" />
        <button @click="findPath">Find Path</button>


        <div class=" mx-auto">
            <h2 class="font-semibold text-primary-content">Converted image</h2>
            <canvas ref="gridCanvas" v-show="grid" class="h-full max-w-screen"/>
        </div>
        <p v-if="path">{{ pathToString }}</p>

<!--        <div v-for="row in grid" class="flex">-->
<!--            {{row}}-->
<!--        </div>-->

    </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { aStar, Node } from '../../scripts/algorithms/aStar'


const grid = ref<number[][] | null>(null);
const path = ref<Node[]>([]);
const gridCanvas = ref<HTMLCanvasElement | null>(null);

function canvasClickHandler(event: MouseEvent) {
    if (!gridCanvas.value || !grid.value) return;

    const cellSize = 10;
    const rect = gridCanvas.value.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / cellSize);
    const y = Math.floor((event.clientY - rect.top) / cellSize);

    if (x >= 0 && x < grid.value[0].length && y >= 0 && y < grid.value.length) {
        const start = new Node(0, 0);
        const end = new Node(y, x);
        path.value = aStar(grid.value, start, end);
        drawGrid();
    }
}
watch(
    () => gridCanvas.value,
    () => {
        if (gridCanvas.value) {
            gridCanvas.value.addEventListener("click", canvasClickHandler);
        }
    }
);

function findPath() {
    const start = new Node(0, 0);
    const end = new Node(19, 19);
    if (grid.value) {
        path.value = aStar(grid.value, start, end);
        drawGrid()
    }
}

const pathToString = computed(() => {
    return path.value
        ? path.value.map((node) => `(${node.x}, ${node.y})`).join(' -> ')
        : 'No path found';
});


async function loadImage(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const imageBitmap = await createImageBitmap(file);
    const canvas = document.createElement('canvas');
    canvas.width = imageBitmap.width;
    canvas.height = imageBitmap.height;

    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(imageBitmap, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    grid.value = imageDataToGrid(imageData);
}

function imageDataToGrid(imageData: ImageData): number[][] {
    const rows = imageData.height;
    const cols = imageData.width;
    const grid: number[][] = new Array(rows).fill(null).map(() => new Array(cols).fill(0));

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const index = (y * cols + x) * 4;
            const r = imageData.data[index];
            const g = imageData.data[index + 1];
            const b = imageData.data[index + 2];

            // Black pixel (wall) condition
            if (r === 0 && g === 0 && b === 0) {
                grid[y][x] = 1;
            } else {
                grid[y][x] = 0;
            }
        }
    }
    return grid;
}

async function drawGrid() {
    console.log('drawGrid')
    if (!grid.value || !gridCanvas.value || !path.value) return;

    const canvas = gridCanvas.value;
    const ctx = canvas.getContext('2d')!;
    const cellSize = 10;

    canvas.width = grid.value[0].length * cellSize;
    canvas.height = grid.value.length * cellSize;

    for (let y = 0; y < grid.value.length; y++) {
        for (let x = 0; x < grid.value[0].length; x++) {
            if (grid.value[y][x] === 1) {
                ctx.fillStyle = 'black';
            } else {
                ctx.fillStyle = 'white';
            }
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
            ctx.strokeStyle = 'gray';
            ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }

    // Draw the path in blue
    ctx.fillStyle = 'blue';
    for (const node of path.value) {
        ctx.fillRect(node.y * cellSize, node.x * cellSize, cellSize, cellSize);
    }
}

// Watch for changes in the grid and redraw it
watch(
    () => grid.value,
    () => {
        drawGrid();
    }
);
</script>

<style scoped>

</style>