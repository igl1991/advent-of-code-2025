export type Range = { from: number; to: number };

export const getFreshIngredients = (
    ingredients: number[],
    freshRanges: Range[]
) => {
    const sortedIngredients = ingredients.sort((first, next) => first < next ? -1 : 1);
    const sortedFreshRanges = freshRanges.sort((first, next) => first.from < next.from ? -1 : 1)

    const freshIngredients = [];
    for (const ingredient of sortedIngredients) {
        let isFresh = false;
        for (const { from, to } of sortedFreshRanges) {
            if (ingredient >= from && ingredient <= to) {
                isFresh = true;
                break;
            }
            if (from > ingredient && to > ingredient) {
                break;
            }
        }
        if (isFresh) freshIngredients.push(ingredient);
    }

    return freshIngredients;
}