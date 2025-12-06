import { findRemovableRolls } from '../../src/day04/findRemovableRolls'
import type { Matrix } from '../../src/day04/types';

describe('findRemovableRolls', () => {
    it('should work', () => {
        const matrix: Matrix = [
            [false, false, true, true, false, true, true, true, true, false],
            [true, true, true, false, true, false, true, false, true, true],
            [true, true, true, true, true, false, true, false, true, true],
            [true, false, true, true, true, true, false, false, true, false],
            [true, true, false, true, true, true, true, false, true, true],
            [false, true, true, true, true, true, true, true, false, true],
            [false, true, false, true, false, true, false, true, true, true],
            [true, false, true, true, true, false, true, true, true, true],
            [false, true, true, true, true, true, true, true, true, false],
            [true, false, true, false, true, true, true, false, true, false]
        ];
        expect(findRemovableRolls(matrix)).toEqual([
            { col: 2, row: 0 },
            { col: 3, row: 0 },
            { col: 5, row: 0 },
            { col: 6, row: 0 },
            { col: 8, row: 0 },
            { col: 0, row: 1 },
            { col: 6, row: 2 },
            { col: 0, row: 4 },
            { col: 9, row: 4 },
            { col: 0, row: 7 },
            { col: 0, row: 9 },
            { col: 2, row: 9 },
            { col: 8, row: 9 }
        ]);
    })
})