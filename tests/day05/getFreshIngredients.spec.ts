import { getFreshIngredients } from '../../src/day05/getFreshIngredients.ts'

describe('getFreshIngredients', () => {
    it('should work', () => {
        expect(getFreshIngredients([1, 5, 8, 11, 17, 32], [
            { from: 3, to: 5 },
            { from: 10, to: 14 },
            { from: 16, to: 20 },
            { from: 12, to: 18 },
        ])).toEqual([5, 11, 17]);
    })
})