import { getPossibleFreshIngredientsCount } from '../../src/day05/getPossibleFreshIngredients'

describe('getPossibleFreshIngredients', () => {
    it('should work with small ranges', () => {
        expect(getPossibleFreshIngredientsCount([
            { from: 3, to: 5 },
            { from: 10, to: 14 },
            { from: 16, to: 20 },
            { from: 12, to: 18 },
            { from: 9, to: 21 }
        ])).toEqual([3, 4, 5, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].length)
    })


    it('should work with overlapping ranges', () => {
        expect(getPossibleFreshIngredientsCount([
            { from: 3, to: 4 },
            { from: 3, to: 5 },
            { from: 3, to: 5 },
            { from: 4, to: 6 },
            { from: 100, to: 105 },
            { from: 105, to: 106 }
        ])).toBe(11);
    })

    it('should work with bigger ranges', () => {
        expect(getPossibleFreshIngredientsCount([
            { from: 383043617664892, to: 389277822354893 }
        ])).toBe(389277822354893 - 383043617664892 + 1)
    })
})