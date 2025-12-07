import { convertRowsToTasksVertical } from '../../src/day06/convertRowsToTasksVertical'

describe('convertRowsToTasksVertical', () => {
    it('should convert rows correctly', () => {
        expect(convertRowsToTasksVertical([
            "123 328  51 64 ",
            " 45 64  387 23 ",
            "  6 98  215 314",
            "*   +   *   +  "
        ])).toEqual([
            { numbers: [356, 24, 1], operation: 'multiply' },
            { numbers: [8, 248, 369], operation: 'add' },
            { numbers: [175, 581, 32], operation: 'multiply' },
            { numbers: [4, 431, 623], operation: 'add' },
        ])
    })
})