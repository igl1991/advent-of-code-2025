import { getPositionsFromSequence, Sequence } from "./getPositionsFromSequence"

describe('getPositionsFromSequence', () => {
    it('should be correct for example', () => {
        const sequence: Sequence = [
            { turn: 'left', amount: 68 },
            { turn: 'left', amount: 30 },
            { turn: 'right', amount: 48 },
            { turn: 'left', amount: 5 },
            { turn: 'right', amount: 60 },
            { turn: 'left', amount: 55 },
            { turn: 'left', amount: 1 },
            { turn: 'left', amount: 99 },
            { turn: 'right', amount: 14 },
            { turn: 'left', amount: 82 },
        ]

        expect(getPositionsFromSequence(50, sequence)).toEqual([
            82, 52, 0, 95, 55, 0, 99, 0, 14, 32
        ])
    })
})