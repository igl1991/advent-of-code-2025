import fs from 'node:fs/promises';

export const getGridFromInput = async () => {
    const fileContent = await fs.readFile('./public/day04.txt');
    const stringContent = fileContent.toString();
    const rows = stringContent.split("\n");
    const matrix = []
    for (const row of rows) {
        const cols = row.split('');
        const matrixRow = [];
        for (const char of cols) {
            if (char === '@') {
                matrixRow.push(true)
            } else if (char === '.') {
                matrixRow.push(false)
            }
        }
        matrix.push(matrixRow);
    }

    return matrix;
}