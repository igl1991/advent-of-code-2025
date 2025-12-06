import { findRemovableRolls } from "./findRemovableRolls.ts";
import type { Matrix } from "./types";

export const getRemovableRollsCount = (matrix: Matrix) => {
    const removableRolls = findRemovableRolls(matrix);
    return removableRolls.length;
}