import { getMaxJoltageInBank } from '../../src/day03/getMaxJoltageInBank'

describe('getMaxJoltageInBank', () => {
    it('should work', () => {
        expect(getMaxJoltageInBank('987654321111111')).toBe('98');
        expect(getMaxJoltageInBank('811111111111119')).toBe('89');
        expect(getMaxJoltageInBank('234234234234278')).toBe('78');
        expect(getMaxJoltageInBank('818181911112111')).toBe('92');
    })
})