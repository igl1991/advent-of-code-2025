import { readInput } from "./readInput.ts";
import { turnLightsOn } from "./turnLightsOn.ts";

export async function day10() {
    const machines = await readInput();
    let totalCount = 0;
    for (const [index, machine] of machines.entries()) {
        const buttonClicks = turnLightsOn(machine);
        console.log(index, buttonClicks);
        totalCount += buttonClicks;
    }

    console.log('Step 1 - total button clicks', totalCount);
}