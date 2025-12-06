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
        // This range is included in the previous one
        if (to < lastTo) {
            continue;
        }
        
        let rangeAmount = to - from + 1;

        // Partially overlapping ranges
        if (lastTo >= from) {
            const duplicatesCount = lastTo - from + 1;
            rangeAmount -= duplicatesCount;
        }

        count += rangeAmount;
        lastTo = to;
    }

    return count;
}