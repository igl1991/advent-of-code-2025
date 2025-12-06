import { getFreshIngredients } from "./getFreshIngredients.ts";
import { getPossibleFreshIngredientsCount } from "./getPossibleFreshIngredients.ts";
import { readIngredientDatabase } from "./readIngredientDatabase.ts";

export async function day05() {
    const {
        ingredients,
        ranges
    } = await readIngredientDatabase();

    // PART 1
    const freshIngredients = getFreshIngredients(ingredients, ranges);
    const count = freshIngredients.length;
    console.log(`PART 1 - got ${count} fresh ingredients`);

    // PART 2
    const freshIdsCount = getPossibleFreshIngredientsCount(ranges);
    console.log(`PART 2 - got ${freshIdsCount} fresh ingredients`)
}