import { turnRight } from "./turnRight";

describe('turnRight', () => {
    it('should return new position basic', () => {
        expect(turnRight(50, 10)).toBe(60);
        expect(turnRight(99, 1)).toBe(0);
    })

    it('should return new position with wrap around', () => {
        expect(turnRight(90, 20)).toBe(10);
    })

    it('should return new position with multi turns', () => {
        expect(turnRight(90, 120)).toBe(10);
    })
});