import { findMovableRolls } from "./findMovableRolls.ts";
import { getGridFromInput } from "./getGridFromInput.ts";

export async function day04() {
    const matrix = await getGridFromInput();
    
    const movableRollsCount = findMovableRolls(matrix);
    console.log(`PART 1 - found ${movableRollsCount} movable rolls`)
}