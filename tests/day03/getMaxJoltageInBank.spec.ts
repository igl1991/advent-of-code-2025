import { getMaxJoltageInBank } from '../../src/day03/getMaxJoltageInBank'

describe('getMaxJoltageInBank', () => {
    it('should work with 2', () => {
        expect(getMaxJoltageInBank('987654321111111')).toBe('98');
        expect(getMaxJoltageInBank('811111111111119')).toBe('89');
        expect(getMaxJoltageInBank('234234234234278')).toBe('78');
        expect(getMaxJoltageInBank('818181911112111')).toBe('92');
    })
    
    it('should work with 12', () => {
        expect(getMaxJoltageInBank('987654321111111', 12)).toBe('987654321111');
        expect(getMaxJoltageInBank('811111111111119', 12)).toBe('811111111119');
        expect(getMaxJoltageInBank('234234234234278', 12)).toBe('434234234278');
        expect(getMaxJoltageInBank('818181911112111', 12)).toBe('888911112111');
    })
})