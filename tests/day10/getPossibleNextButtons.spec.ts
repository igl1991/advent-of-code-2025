import { getPossibleNextButtons } from '../../src/day10/getPossibleNextButtons';

describe('getPossibleNextButtons', () => {
    it('should return best next button if there is only 1', () => {
        const bestNextButtons = getPossibleNextButtons(
            [false, false, false, false],
            // [false, true, true, false]
            [1, 2],
            [
                // current diff 2
                [3], // diff 3
                [1, 3], // diff 2
                [2], // diff 1
                [2, 3], // diff 2
                [0, 2], // diff 2
                [0, 1], // diff 2
            ]
        );
        expect(bestNextButtons).toEqual([
            {
                index: 1,
                button: [1, 3],
                diff: 2
            },
            {
                index: 2,
                button: [2],
                diff: 1
            },
            {
                index: 3,
                button: [2, 3],
                diff: 2
            },
            {
                index: 4,
                button: [0, 2],
                diff: 2
            },
            {
                index: 5,
                button: [0, 1],
                diff: 2
            }
        ])
    })
})