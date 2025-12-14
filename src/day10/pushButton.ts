export function pushButton(button: number[], currentLights: boolean[]): boolean[] {
    const nextLights = [...currentLights];
    for (const index of button) {
        nextLights[index] = !nextLights[index];
    }
    return nextLights;
}