import { extractSurrounding } from "./extractSurrounding.ts";
import type { Matrix } from "./types";

export type Index = { col: number, row: number };

export const findRemovableRolls = (grid: Matrix) => {
    let removableRolls: Index[] = [];
    for (const [rowIndex, row] of grid.entries()) {
        for (const [colIndex, item] of row.entries()) {
            if (!item) continue;
            const surrounding = extractSurrounding(grid, colIndex, rowIndex);
            const rollsInMatrix = countRollsInMatrix(surrounding);
            if (rollsInMatrix < 5) {
                removableRolls.push({ col: colIndex, row: rowIndex });
            }
        }
    }

    return removableRolls;
}

function countRollsInMatrix(matrix: Matrix) {
    let totalRolls = 0;
    for (const row of matrix) {
        for (const item of row) {
            if (!item) continue;
            totalRolls++;
        }
    }

    return totalRolls;
}

