import { calculateOne } from '../../src/day06/calculate'

describe('calculateOne', () => {
    it('should work correctly for multiply', () => {
        expect(calculateOne({ numbers: [123, 45, 6], operation: 'multiply' })).toBe(123 * 45 * 6)
    })

    it('should work correctly for add', () => {
        expect(calculateOne({ numbers: [123, 45, 6], operation: 'add' })).toBe(123 + 45 + 6)
    })
})