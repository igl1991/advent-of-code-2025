import { getPossibleNextButtons } from '../../src/day10/getPossibleNextButtons';

describe('getPossibleNextButtons', () => {
    it('should return best next button', () => {
        const bestNextButtons = getPossibleNextButtons(
            [false, false, false, false],
            [1, 2],
            [
                // current diff 2
                { button: [3], id: 0 }, // diff 3
                { button: [1, 3], id: 1 }, // diff 2
                { button: [2], id: 2 }, // diff 1
                { button: [2, 3], id: 3 }, // diff 2
                { button: [0, 2], id: 4 }, // diff 2
                { button: [0, 1], id: 5 }, // diff 2
            ]
        );
        expect(bestNextButtons).toEqual([
            {
                button: { button: [2], id: 2 },
                diff: 1
            },
            {
                button: { button: [1, 3], id: 1 },
                diff: 2
            },
            {
                button: { button: [2, 3], id: 3 },
                diff: 2
            },
            {
                button: { button: [0, 2], id: 4 },
                diff: 2
            },
            {
                button: { button: [0, 1], id: 5 },
                diff: 2
            },
            {
                button: { button: [3], id: 0 },
                diff: 3
            },
        ])
    })
})