import { getPasswordFromPositions } from "../../src/day01/getPasswordFromPositions";

describe('getPasswordFromPositions', () => {
    it('should count correctly', () => {
        expect(getPasswordFromPositions([1, 0, 5, 0, 2, 4, 0])).toBe(3);
    })
})