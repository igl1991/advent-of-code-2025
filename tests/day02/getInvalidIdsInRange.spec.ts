import { getInvalidIdsInRange } from '../../src/day02/getInvalidIdsInRange'

describe('getInvalidIdsInRange', () => {
    it('should output correct ids', () => {
        expect(getInvalidIdsInRange(11, 22)).toEqual([11, 22]);
        expect(getInvalidIdsInRange(95, 115)).toEqual([99]);
        expect(getInvalidIdsInRange(998, 1012)).toEqual([1010]);
        expect(getInvalidIdsInRange(1188511880, 1188511890)).toEqual([1188511885]);
        expect(getInvalidIdsInRange(222220, 222224)).toEqual([222222]);
        expect(getInvalidIdsInRange(1698522, 1698528)).toEqual([]);
        expect(getInvalidIdsInRange(446443, 446449)).toEqual([446446]);
        expect(getInvalidIdsInRange(38593856, 38593862)).toEqual([38593859]);
        expect(getInvalidIdsInRange(565653, 565659)).toEqual([]);
        expect(getInvalidIdsInRange(824824821, 824824827)).toEqual([]);
        expect(getInvalidIdsInRange(2121212118, 2121212124)).toEqual([]);
    })
})