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

    // [#...#####.] (1,2,5,6,7,8,9) (1,2,3,5,6,8,9) (0,4,7,9) (2,3,6,7) (3,4,6) (0,3,4,7,8) (0,1,2,4,6,7,8) (1,2,5,6,8) (0,1,2,4,5,6,7,8) (1,4,5,7,9) (0,2,3,4,6,7,8) {214,54,224,215,238,36,240,244,230,31}
    it('should work for failing prod data', () => {
        expect(turnLightsOn({
            totalLights: 10,
            indicatorLightsOn: [0, 4, 5, 6, 7, 8],
            buttons: [
                [1, 2, 5, 6, 7, 8, 9],
                [1, 2, 3, 5, 6, 8, 9],
                [0, 4, 7, 9],
                [2, 3, 6, 7],
                [3, 4, 6],
                [0, 3, 4, 7, 8],
                [0, 1, 2, 4, 6, 7, 8],
                [1, 2, 5, 6, 8],
                [0, 1, 2, 4, 5, 6, 7, 8],
                [1, 4, 5, 7, 9],
                [0, 2, 3, 4, 6, 7, 8]
            ]
        }))
    })
    /*
[###..#..#.] (0,4,7,8,9) (0,9) (0,1,2,4,6,7,8,9) (1,2,7) (0,1,3,4,8,9) (0,3,6,8) (5) (3,5,9) (0,1,2,4,5,6,7,9) (0,1,2,3,5,7,8,9) {89,57,40,176,52,160,40,53,52,211}
[#....#..##] (0,1,2,8,9) (0,1,3,5,6,9) (1,3,5) (0,2,3,5,6,7) (7) (2,4,5) (2,6) (0,3,4,6,9) (1,3,4,5,6,9) {56,44,38,54,26,46,47,20,17,49}
    **/
})