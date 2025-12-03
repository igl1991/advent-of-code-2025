
export type Bank = string;
export const getMaxJoltageInBank = (bank: Bank): string => {
    const { maxNumber, pos } = findMaxNumberInString(bank, 0, bank.length - 1);
    const { maxNumber: secondNumber } = findMaxNumberInString(bank, pos + 1);
    return String(maxNumber) + String(secondNumber);
}

const findMaxNumberInString = (input: string, startPos: number, endPos?: number): { maxNumber: number, pos: number } => {
    let maxNumber = 0;
    let pos = startPos;
    for (let loopPos = startPos; loopPos < (endPos ?? input.length); loopPos++) {
        const currentChar = Number(input.charAt(loopPos));
        if (currentChar > maxNumber ) {
            maxNumber = currentChar;
            pos = loopPos;
        }
        if (maxNumber === 9) {
            break;
        }
    }


    return { maxNumber, pos }
}