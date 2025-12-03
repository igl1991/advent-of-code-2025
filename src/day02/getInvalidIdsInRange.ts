export const getInvalidIdsInRange = (from: number, to: number) => {
    const invalidNumbers: number[] = [];
    for (let id = from; id <= to; id++) {
        const numberLength = String(id).length;
        if (numberLength % 2 !== 0) continue;

        const middle = numberLength / 2;
        const firstPart = String(id).substring(0, middle);
        const secondPart = String(id).substring(middle);
        if (firstPart === secondPart) {
            invalidNumbers.push(id);
        }
    }
    return invalidNumbers;
}