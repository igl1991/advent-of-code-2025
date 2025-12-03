import { getPasswordComplicated } from '../../src/day01/getPasswordComplicated'

describe('getPasswordComplicated', () => {
    it('should work', () => {
        expect(getPasswordComplicated(50, [
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
        ])).toBe(6);
    })
})