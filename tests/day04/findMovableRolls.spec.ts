import { findMovableRolls } from '../../src/day04/findMovableRolls'
import type { Matrix } from '../../src/day04/types';

describe('findMovableRolls', () => {
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
        expect(findMovableRolls(matrix)).toBe(13);
    })
})