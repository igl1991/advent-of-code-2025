import fs from 'node:fs/promises';

export const getBanksFromInput = async () => {
    const fileContent = await fs.readFile('./public/day03.txt');
    const stringContent = fileContent.toString();
    return stringContent.split("\n");
}