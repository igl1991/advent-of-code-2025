
export type Bank = string;
export const getMaxJoltageInBank = (bank: Bank, totalBatteries: number = 2): string => {
    let output = '';
    let startPos = 0;
    for (let batterieIndex = 0; batterieIndex < totalBatteries; batterieIndex++) {
        const endPos = bank.length - (totalBatteries - batterieIndex - 1);
        const { maxNumber, pos } = findMaxNumberInString(bank, startPos, endPos);
        startPos = pos + 1;
        output += String(maxNumber);
    }

    return output;
}

const findMaxNumberInString = (input: string, startPos: number, endPos?: number): { maxNumber: number, pos: number } => {
    let maxNumber = 0;
    let pos = startPos;
    for (let loopPos = startPos; loopPos < (endPos ?? input.length); loopPos++) {
        const currentChar = Number(input.charAt(loopPos));
        if (currentChar > maxNumber) {
            maxNumber = currentChar;
            pos = loopPos;
        }
        if (maxNumber === 9) {
            break;
        }
    }


    return { maxNumber, pos }
}