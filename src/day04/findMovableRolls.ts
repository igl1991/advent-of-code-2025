import { extractSurrounding } from "./extractSurrounding";
import type { Matrix } from "./types";

export const findMovableRolls = (grid: Matrix) => {
    let totalRolls = 0;
    for (const [rowIndex, row] of grid.entries()) {
        for (const [colIndex, item] of row.entries()) {
            if (!item) continue;
            const surrounding = extractSurrounding(grid, colIndex, rowIndex);
            const rollsInMatrix = countRollsInMatrix(surrounding);
            if (rollsInMatrix < 5) {
                totalRolls++;
            }
        }
    }

    return totalRolls;
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

