export type Task = {
    numbers: number[];
    operation: 'add' | 'multiply' | null
}

export const convertRowsToTasks = (rows: string[]) => {
    const operationRow = rows.pop()!;

    const taskCount = getNumberEntriesFromRow(rows[0]).length;

    let tasks: Task[] = Array.from({ length: taskCount }, () => ({ numbers: [], operation: null }));

    for (const row of rows) {
        const items = getNumberEntriesFromRow(row);
        for (const [index, item] of items.entries()) {
            tasks[index].numbers.push(Number(item));
        }
    }

    const operationSplitRegex = new RegExp(/\s*(\+|\*)\s*/, "g");
    const operations = operationRow.match(operationSplitRegex);
    for (const [index, operation] of operations?.entries() ?? []) {
        const op = operation.trim();
        if (op === '*') {
            tasks[index].operation = 'multiply';
        } else if (op === '+') {
            tasks[index].operation = 'add';
        }
    }

    return tasks;
}


function getNumberEntriesFromRow(row: string) {
    const numberSplitRegex = new RegExp(/\s*\d*\s*/, "g")
    const regexpResult = row.match(numberSplitRegex)
    if (!regexpResult) {
        throw new Error('splitting row failed');
    }
    return regexpResult
        .map(item => item.trim())
        .filter(item => item.length > 0);
}