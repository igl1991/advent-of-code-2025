export function getDiff(
    currentLights: boolean[], 
    goal: number[]
): number {
    const diff: number[] = [];
    for (const [index, light] of currentLights.entries()) {
        if ((light && !goal.includes(index)) || !light && goal.includes(index)) { diff.push(index) }
    }
    return diff.length;
}