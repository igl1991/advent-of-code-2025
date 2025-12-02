import { turnLeft } from "../../src/day01/turnLeft";

describe('turnLeft', () => {
    it('should return new position basic', ()=>{
        expect(turnLeft(50, 10)).toBe(40);
        expect(turnLeft(0, 1)).toBe(99);
    })

    it('should return new position with wrap around', ()=>{
        expect(turnLeft(10, 20)).toBe(90);
    })

    it('should return new position with multi turns', ()=>{
        expect(turnLeft(10, 120)).toBe(90);
    })
});