import fs from 'node:fs/promises';

export const getRangesFromInput = async (): Promise<{from: number, to: number}[]> => {
    const fileContent = await fs.readFile('./public/day02.txt');
    const stringContent = fileContent.toString();
    const array = Array.from(stringContent.split(","))
        .map((item) => {
            const [from, to] = item.split('-')
            return { from: Number(from), to: Number(to) };
        });
    return array;
}