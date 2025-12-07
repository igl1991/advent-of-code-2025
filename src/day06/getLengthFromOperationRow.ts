export const getLengthFromOperationRow = (row: string): { length: number, operation: 'multiply' | 'add' }[] => {
    const operationSplitRegex = new RegExp(/(\+|\*)\s*/, "g");
    const operations = row.match(operationSplitRegex);
    if (!operations) {
        throw new Error('oh oh');
    }
    const mapping = [];
    for (const [index, op] of operations.entries()) {
        mapping.push({
            length: index < operations.length - 1 ? op.length - 1 : op.length,
            operation: op.includes('*') ? 'multiply' as const : 'add' as const,
        })
    }

    return mapping;
}