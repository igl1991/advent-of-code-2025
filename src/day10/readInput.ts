import { readLinesFromFile } from "../readLinesFromFile.ts";
import type { Button, Machine } from "./types";

export async function readInput(): Promise<Machine[]> {
    const rows = await readLinesFromFile('./public/day10.txt');

    return rows.map(row => {
        const parts = row.split(' ');
        let indicatorLightsPart = parts.shift();
        const joltageStuff = parts.pop();

        const { totalLights, indicatorLightsOn } = parseIndicatorLights(indicatorLightsPart);

        return {
            totalLights,
            indicatorLightsOn,
            buttons: parseButtons(parts),
        }
    });
}


function parseIndicatorLights(input: string | undefined) {
    if (!input) {
        throw new Error('Something wrong reading the indicator lights');
    }
    const cleanedInput = input.slice(1, - 1);
    const totalLights = cleanedInput.length;
    const indicatorLightsOn = [];
    for (let index = 0; index < totalLights; index++) {
        if (cleanedInput[index] === '#') indicatorLightsOn.push(index);
    }

    return { totalLights, indicatorLightsOn };
}

function parseButtons(input: string[]): Button[] {
    const buttons = [];
    for (const item of input) {
        const cleanedItem = item.slice(1, -1);
        const indices = cleanedItem.split(',').map(Number);
        buttons.push(indices);
    }

    return buttons;
}