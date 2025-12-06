import { removeRollsFromGrid } from '../../src/day04/removeRollsFromGrid'

describe('removeRollsFromGrid', () => {
    it('should work', () => {
        expect(removeRollsFromGrid([
            [true, false, true, true],
            [false, true, true, true]
        ], [
            { row: 0, col: 2 },
            { row: 1, col: 2 },
            { row: 1, col: 1 }
        ])).toEqual([
            [true, false, false, true],
            [false, false, false, true]
        ])
    })
})