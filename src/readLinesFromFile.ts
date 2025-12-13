import fs from 'node:fs/promises';

export async function readLinesFromFile(filePath: string) {
    const fileContent = await fs.readFile(filePath);
    const stringContent = fileContent.toString();
    return stringContent.split("\n");
}