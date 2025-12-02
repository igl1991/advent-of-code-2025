import { turnLeft } from "./turnLeft";

describe('turnLeft', () => {
    it('should return new position basic', ()=>{
        expect(turnLeft(50, 10)).toBe(40);
    })

    it('should return new position with wrap around', ()=>{
        expect(turnLeft(10, 20)).toBe(90);
    })
});