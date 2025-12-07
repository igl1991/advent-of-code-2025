import { calculateOne } from "./calculate.ts";
import { convertRowsToTasks } from "./convertRowsToTasks.ts";
import { readRowsFromFile } from "./readRowsFromFile.ts";

export async function day06() {
    const rows = await readRowsFromFile();
    const tasks = convertRowsToTasks(rows);

    // PART 1
    const result = tasks.map(task => calculateOne(task)).reduce((left, right) => left + right);
    console.log('PART 1 - total sum is', result);
}