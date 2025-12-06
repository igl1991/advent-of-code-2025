import { getGridFromInput } from "./getGridFromInput.ts";
import { getRemovableRollsCount } from "./getRemovableRollsCount.ts";
import { getRemovableRollsCountWithRemoving } from "./getRemovableRollsCountWithRemoving.ts";

export async function day04() {
    const matrix = await getGridFromInput();
    
    // PART 1
    const movableRollsCount = getRemovableRollsCount(matrix);
    console.log(`PART 1 - found ${movableRollsCount} removable rolls`)

    // PART 2
    const withRemovingCount = getRemovableRollsCountWithRemoving(matrix);
    console.log(`PART 2 - found ${withRemovingCount} removable rolls`)

}