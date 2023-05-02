export type Grid = number[][];

export class Node {
    x: number;
    y: number;
    f: number;
    g: number;
    h: number;
    parent: Node | null;

    constructor(x: number, y: number, parent: Node | null = null) {
        this.x = x;
        this.y = y;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.parent = parent;
    }
}

class PriorityQueue {
    items: Node[];

    constructor() {
        this.items = [];
    }

    enqueue(item: Node): void {
        this.items.push(item);
        this.items.sort((a, b) => a.f - b.f);
    }

    dequeue(): Node | undefined {
        return this.items.shift();
    }

    find(item: Node): Node | undefined {
        return this.items.find(node => node.x === item.x && node.y === item.y);
    }

    remove(item: Node): void {
        this.items = this.items.filter(node => node.x !== item.x || node.y !== item.y);
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

function heuristic(node1: Node, node2: Node): number {
    return Math.abs(node1.x - node2.x) + Math.abs(node1.y - node2.y);
}

export function aStar(grid: Grid, start: Node, end: Node): Node[] {
    const openList = new PriorityQueue();
    openList.enqueue(start);
    const closedList: Node[] = [];

    while (!openList.isEmpty()) {
        const currentNode = openList.dequeue() as Node;
        closedList.push(currentNode);

        if (currentNode.x === end.x && currentNode.y === end.y) {
            const path: Node[] = [];
            let current: Node | null = currentNode;
            while (current !== null) {
                path.push(current);
                current = current.parent;
            }
            return path.reverse();
        }

        const neighbors: Node[] = [];
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (const [dx, dy] of dirs) {
            const x = currentNode.x + dx;
            const y = currentNode.y + dy;

            if (
                x >= 0 && x < grid.length &&
                y >= 0 && y < grid[0].length &&
                grid[x][y] === 0
            ) {
                neighbors.push(new Node(x, y, currentNode));
            }
        }

        for (const neighbor of neighbors) {
            if (closedList.some(node => node.x === neighbor.x && node.y === neighbor.y)) {
                continue;
            }

            neighbor.g = currentNode.g + 1;
            neighbor.h = heuristic(neighbor, end);
            neighbor.f = neighbor.g + neighbor.h;

            const openNode = openList.find(neighbor);
            if (!openNode || openNode.g > neighbor.g) {
                if (!openNode) {
                    openList.enqueue(neighbor);
                } else {
                    openNode.g = neighbor.g;
                    openNode.f = neighbor.f;
                    openNode.parent = currentNode;
                }
            }
        }
    }

    return [];
}