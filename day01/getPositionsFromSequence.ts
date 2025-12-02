import { turnLeft } from "./turnLeft";
import { turnRight } from "./turnRight";

export type Sequence =
    {
        turn: 'left' | 'right', amount: number
    }[]

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