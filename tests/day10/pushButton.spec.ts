import { pushButton } from '../../src/day10/pushButton'

describe('pushButton', () => {
    it('should change result correctly', () => {
        expect(pushButton([1, 2], [false, false, false, false])).toEqual([
            false, true, true, false
        ])
    })
})