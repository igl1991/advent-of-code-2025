export const getMoreInvalidIdsInRange = (from: number, to: number) => {
    const invalidNumbers: number[] = [];
    for (let id = from; id <= to; id++) {
        const numberLength = String(id).length;
        for (let equalParts = 2; equalParts <= numberLength; equalParts++) {
            if (numberLength % equalParts !== 0) continue;
            const partLength = numberLength / equalParts;
            const regex = new RegExp(String.raw`.{1,${partLength}}`, "g")
            const parts = String(id).match(regex);
            if (!parts) continue;

            const firstEl = parts[0];
            if (parts.filter(el => el !== firstEl).length > 0) {
                continue;
            }
            invalidNumbers.push(id);
        }
    }

    const set = new Set(invalidNumbers);
    return Array.from(set);
}