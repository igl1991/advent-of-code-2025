import { calculateOne } from "./calculate.ts";
import { convertRowsToTasksHorizontal } from "./convertRowsToTasksHorizontal.ts";
import { convertRowsToTasksVertical } from "./convertRowsToTasksVertical.ts";
import { readRowsFromFile } from "./readRowsFromFile.ts";

export async function day06() {
    const rows = await readRowsFromFile();
    
    // PART 1
    let tasks = convertRowsToTasksHorizontal(rows);
    let result = tasks.map(task => calculateOne(task)).reduce((left, right) => left + right);
    console.log('PART 1 - total sum is', result);

    // PART 2
    tasks = convertRowsToTasksVertical(rows);
    result = tasks.map(task => calculateOne(task)).reduce((left, right) => left + right);
    console.log('PART 2 - total sum is', result);
}