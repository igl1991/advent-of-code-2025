import { findRemovableRolls } from "./findRemovableRolls.ts";
import { removeRollsFromGrid } from "./removeRollsFromGrid.ts";
import type { Matrix } from "./types";

export const getRemovableRollsCountWithRemoving = (matrix: Matrix) => {
    let totalCount = 0;
    let grid = matrix;
    let iteration = 0;
    do {
        const removableRolls = findRemovableRolls(grid);
        const removableRollsCount = removableRolls.length;
        if (removableRollsCount === 0) {
            break;
        }
        totalCount += removableRollsCount;
        grid = removeRollsFromGrid(grid, removableRolls);
        console.log(`Iteration ${iteration} - removable rolls: ${removableRollsCount}`)
        iteration++;
    } while (true)

    return totalCount;
}