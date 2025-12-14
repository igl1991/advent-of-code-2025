import { turnLightsOn } from '../../src/day10/turnLightsOn.ts';

describe('turnLightsOn', () => {
    it('should return 1 with perfect button', () => {
        expect(turnLightsOn({
            totalLights: 4,
            indicatorLightsOn: [1, 2],
            buttons: [
                [3],
                [1, 3],
                [2],
                [2, 3],
                [1, 2],
                [0, 2],
                [0, 1],
            ],
        })).toBe(1);
    })

    it('should return correct value for first machine', () => {
        expect(turnLightsOn({
            totalLights: 4,
            indicatorLightsOn: [1, 2],
            buttons: [
                [3],
                [2],
                [2, 3],
                [1, 3],
                [0, 2],
                [0, 1],
            ],
        })).toBe(2);
    })

    // [...#.] (0,2,3,4) (2,3) (0,4) (0,1,2) (1,2,3,4) 
    it('should return correct value for second machine', () => {
        expect(turnLightsOn({
            totalLights: 5,
            indicatorLightsOn: [3],
            buttons: [
                [0, 2, 3, 4],
                [2, 3],
                [0, 4],
                [0, 1, 2],
                [1, 2, 3, 4],
            ],
        })).toBe(3);
    })

    it('should return correct value for third machine', () => {
        expect(turnLightsOn(
            {
                totalLights: 6,
                indicatorLightsOn: [1, 2, 3, 5],
                buttons: [
                    [0, 1, 2, 3, 4],
                    [0, 3, 4],
                    [0, 1, 2, 4, 5],
                    [1, 2]
                ]
            }
        )).toBe(2);
    })
})