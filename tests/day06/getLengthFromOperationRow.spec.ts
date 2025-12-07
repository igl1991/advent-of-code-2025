import { getLengthFromOperationRow } from '../../src/day06/getLengthFromOperationRow'

describe('getLengthFromOperationRow', () => {
    it('should extract lengths correctly', () => {
        expect(getLengthFromOperationRow('*  +')).toEqual([
            { operation: 'multiply', length: 2 },
            { operation: 'add', length: 1 }
        ]);


        expect(getLengthFromOperationRow('*   +   *   +  ')).toEqual([
            { operation: 'multiply', length: 3 },
            { operation: 'add', length: 3 },
            { operation: 'multiply', length: 3 },
            { operation: 'add', length: 3 },
        ]);
    })
})