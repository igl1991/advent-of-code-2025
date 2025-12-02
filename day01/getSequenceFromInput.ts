import type { Sequence, SequenceItem } from "./getPositionsFromSequence";
import fs from 'node:fs/promises';

export const getSequenceFromInput = async (): Promise<Sequence> => {
    const fileContent = await fs.readFile('./day01/input.txt');
    const stringContent = fileContent.toString();
    const array = Array.from(stringContent.split("\n"))
        .map((item) => {
            const sequence: SequenceItem = { turn: 'right', amount: Number(item.substring(1)) }
            if (item.startsWith('R')) {
                // we're fine
            } else if (item.startsWith('L')) {
                sequence.turn = 'left';
            } else {
                throw Error('unknown format')
            }
            return sequence;
        });
    return array;
}