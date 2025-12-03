import { getMoreInvalidIdsInRange } from '../../src/day02/getMoreInvalidIdsInRange'

describe('getMoreInvalidIdsInRange', () => {
    it('should output correct ids', () => {
        expect(getMoreInvalidIdsInRange(11, 22)).toEqual([11, 22]);
        expect(getMoreInvalidIdsInRange(95, 115)).toEqual([99, 111]);
        expect(getMoreInvalidIdsInRange(998, 1012)).toEqual([999, 1010]);
        expect(getMoreInvalidIdsInRange(1188511880, 1188511890)).toEqual([1188511885]);
        expect(getMoreInvalidIdsInRange(222220, 222224)).toEqual([222222]);
        expect(getMoreInvalidIdsInRange(1698522, 1698528)).toEqual([]);
        expect(getMoreInvalidIdsInRange(446443, 446449)).toEqual([446446]);
        expect(getMoreInvalidIdsInRange(38593856, 38593862)).toEqual([38593859]);
        expect(getMoreInvalidIdsInRange(565653, 565659)).toEqual([565656]);
        expect(getMoreInvalidIdsInRange(824824821, 824824827)).toEqual([824824824]);
        expect(getMoreInvalidIdsInRange(2121212118, 2121212124)).toEqual([2121212121]);
    })
})