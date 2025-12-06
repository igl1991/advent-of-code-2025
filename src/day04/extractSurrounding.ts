export function extractSurrounding<T>(matrix: T[][], colIndex: number, rowIndex: number) {
    return getPrevAndNextEl(matrix, rowIndex)
        .map(row => getPrevAndNextEl(row, colIndex));
}

function getPrevAndNextEl<T>(row: T[], index: number) {
    const hasPrevEl = index > 0;
    const hasNextEl = index < row.length - 1;

    const newRow: T[] = [];
    if (hasPrevEl) {
        newRow.push(row[index - 1]);
    }
    newRow.push(row[index]);
    if (hasNextEl) {
        newRow.push(row[index + 1]);
    }

    return newRow;
}