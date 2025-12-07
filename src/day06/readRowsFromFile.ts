import fs from 'node:fs/promises';

export const readRowsFromFile = async (): Promise<string[]> => {
    const fileContent = await fs.readFile('./public/day06.txt');
    const stringContent = fileContent.toString();
    return stringContent.split("\n");
}
