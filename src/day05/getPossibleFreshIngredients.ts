import type { Range } from "./getFreshIngredients";

export const getPossibleFreshIngredientsCount = (freshRanges: Range[]) => {
    const sortedFreshRanges = freshRanges
        .sort((first, next) => {
            if (first.from < next.from) {
                return -1;
            }
            if (first.from > next.from) {
                return 1;
            }
            return first.to < next.to ? -1 : 1
        })

    let count = 0;
    let lastTo = 0;
    for (const { from, to } of sortedFreshRanges) {
        const rangeAmount = to - from + 1;
        count += rangeAmount;
        // Overlapping ranges
        if (lastTo > from) {

            // This range is included in the previous one
            if (to < lastTo) {
                count -= rangeAmount;
                continue;

                // only partial overlap
            } else {
                const duplicatesCount = lastTo - from + 1;
                count -= duplicatesCount;
            }
        } else if (lastTo === from) {
            count--;
        }
        lastTo = to;
    }

    return count;
}