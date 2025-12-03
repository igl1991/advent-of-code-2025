import { getInvalidIdsInRange } from "./getInvalidIdsInRange.ts";
import { getRangesFromInput } from "./getRangesFromInput.ts";

export async function day02() {
    // PART 1
    const ranges = await getRangesFromInput();
    let sum = 0;
    for (const { from, to } of ranges) {
        const invalidIds = getInvalidIdsInRange(from, to);
        if (invalidIds.length === 0) continue;
        sum += invalidIds.reduce((left, right) => left + right);
    }
    console.log('Part 1 - Got Sum', sum);

    // PART 2
}