import { turnLeft } from "./turnLeft.ts";
import { turnRight } from "./turnRight.ts";

export type SequenceItem = {
    turn: 'left' | 'right', amount: number
};
export type Sequence = SequenceItem[]

export const getPositionsFromSequence = (
    startPosition: number,
    sequence: Sequence,
) => {
    let position = startPosition;
    const positions = [];
    for (const { turn, amount } of sequence) {
        if (turn === 'left')
            position = turnLeft(position, amount)
        else if (turn === 'right')
            position = turnRight(position, amount)
        positions.push(position);
    }
    return positions;
}