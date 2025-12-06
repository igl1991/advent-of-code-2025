import { extractSurrounding } from "../../src/day04/extractSurrounding"

describe('extractSurrounding', () => {
    it('should extract correctly', () => {
        const matrix = [
           [ 1, 2, 3, 4],
           [ 5, 6, 7, 8],
           [ 9, 10, 11, 12],
        ];

        expect(extractSurrounding(matrix, 0, 0)).toEqual([
            [1, 2],
            [5, 6],
        ]);
        expect(extractSurrounding(matrix, 1, 0)).toEqual([
            [1, 2, 3],
            [5, 6, 7],
        ]);
        expect(extractSurrounding(matrix, 2, 0)).toEqual([
            [2, 3, 4],
            [6, 7, 8],
        ]);
        expect(extractSurrounding(matrix, 3, 0)).toEqual([
            [3, 4],
            [7, 8],
        ]);

        expect(extractSurrounding(matrix, 0, 1)).toEqual([
            [1, 2],
            [5, 6],
            [9, 10],
        ]);
        expect(extractSurrounding(matrix, 1, 1)).toEqual([
            [1, 2, 3],
            [5, 6, 7],
            [9, 10, 11],
        ]);
        expect(extractSurrounding(matrix, 2, 1)).toEqual([
            [2, 3, 4],
            [6, 7, 8],
            [10, 11, 12],
        ]);
        expect(extractSurrounding(matrix, 3, 1)).toEqual([
            [3, 4],
            [7, 8],
            [11, 12],
        ]);
    })
})