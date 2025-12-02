import { turnRight } from "./turnRight";

describe('turnRight', () => {
    it('should return new position basic', ()=>{
        expect(turnRight(50, 10)).toBe(60);
    })

    it('should return new position with wrap around', ()=>{
        expect(turnRight(90, 20)).toBe(10);
    })
});