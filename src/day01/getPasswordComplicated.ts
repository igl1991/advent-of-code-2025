import type { Sequence } from "./getPositionsFromSequence";
import { turnLeft } from "./turnLeft";
import { turnRight } from "./turnRight";

export const getPasswordComplicated = (
    startPosition: number,
    sequence: Sequence,
): number => {
    let position = startPosition;
    let password = 0;
    for (const { turn, amount } of sequence) {
        const fullTurns = Math.floor(amount / 100);
        password += fullTurns;
        if (turn === 'left') {
            if (amount % 100 >= position && position !== 0) {
                password++;
            }
            position = turnLeft(position, amount)
        }
        else if (turn === 'right') {
            if (amount % 100 + position >= 100) {
                password++;
            }
            position = turnRight(position, amount)
        }
    }

    return password;
}