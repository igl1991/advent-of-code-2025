import { getLengthFromOperationRow } from "./getLengthFromOperationRow.ts";
import type { Task } from "./types";

export const convertRowsToTasksVertical = (rows: string[]) => {
    const operationRow = rows.pop()!;
    const blocks = getLengthFromOperationRow(operationRow);

    let workingRows = [...rows];
    let tasks: Task[] = Array.from({ length: blocks.length }, () => ({ numbers: [], operation: null }));
    for (const [index, { length, operation }] of blocks.entries()) {
        const blockRows = workingRows.map(row => row.substring(0, length));

        for (let charIndex = length - 1; charIndex >= 0; charIndex--) {
            const numberAtIndex = blockRows.map(row => row[charIndex]).join('')
            tasks[index].numbers.push(Number(numberAtIndex.trim()));
        }

        tasks[index].operation = operation;
        // Remove the placeholder space to process the next block
        workingRows = workingRows.map(row => row.substring(length + 1));
    }

    return tasks;
}


function getNumberEntriesFromRow(row: string) {


}