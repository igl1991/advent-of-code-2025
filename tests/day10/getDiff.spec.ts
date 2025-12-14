import { getDiff } from '../../src/day10/getDiff';

describe('getDiff', () => {
    it('should return correct diff', () => {
        expect(getDiff([
            true, true
        ], [1])).toEqual(1);
        
        expect(getDiff([
            true, true
        ], [0, 1])).toEqual(0);
    })
})