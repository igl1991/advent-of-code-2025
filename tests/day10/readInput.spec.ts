import { readLinesFromFile } from '../../src/readLinesFromFile'
import { readInput } from '../../src/day10/readInput'

jest.mock('../../src/readLinesFromFile');

describe('readInput', () => {
    it('should convert correctly', async () => {
        jest.mocked(readLinesFromFile).mockResolvedValueOnce([
            '[.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}'
        ])
        const input = await readInput();

        expect(input).toEqual([
            {
                totalLights: 4,
                indicatorLightsOn: [1, 2],
                buttons: [
                    [3],
                    [1, 3],
                    [2],
                    [2, 3],
                    [0, 2],
                    [0, 1],
                ],
            }
        ]);
    })
})