import type { Matrix } from "./types";
import type { Index } from "./findRemovableRolls.ts"

export const removeRollsFromGrid = (grid: Matrix, positions: Index[]) => {
    const newGrid = [...grid].map(row => [...row]);
    for (const pos of positions) {
        newGrid[pos.row][pos.col] = false;
    }
    
    return newGrid;
}