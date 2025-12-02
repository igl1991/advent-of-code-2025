export const getPasswordFromPositions = (positions: number[]) => {
    return positions.filter(i => i === 0).length;
}