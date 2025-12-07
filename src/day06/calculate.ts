import type { Task } from "./types";

export const calculateOne = (task: Task) => {
    if (task.operation === 'multiply') {
        return task.numbers.reduce((left, right) => left * right);
    } else if (task.operation === 'add') {
        return task.numbers.reduce((left, right) => left + right);
    } else {
        console.error(task);
        throw new Error('operation null not supported');
    }
}