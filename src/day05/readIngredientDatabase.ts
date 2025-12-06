import fs from 'node:fs/promises';

export const readIngredientDatabase = async () => {
    const fileContent = await fs.readFile('./public/day05.txt');
    const stringContent = fileContent.toString();
    const rows = stringContent.split("\n");

    const ranges = [];
    const ingredients = [];
    let readingRanges = true;
    for (const row of rows) {
        if (row.trim() === '') {
            readingRanges = false;
            continue;
        }
        if (readingRanges) {
            const [from, to] = row.split('-');
            ranges.push({ from: Number(from), to: Number(to) })
        } else {
            ingredients.push(Number(row));
        }
    }

    return { ranges, ingredients };
}