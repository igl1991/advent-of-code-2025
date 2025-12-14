// import { getDiff } from "./getDiff";
// import { isResultOk } from "./isResultOk";
import { getPossibleNextButtons } from "./getPossibleNextButtons";
import { pushButton } from "./pushButton";
import type { Button, ButtonWithId, Machine } from "./types";

type Combination = {
    buttons: ButtonWithId[],
    finalLights: boolean[],
}

export function turnLightsOn(machine: Machine) {
    const { totalLights, indicatorLightsOn: goal, buttons } = machine;

    const buttonsWithId: ButtonWithId[] = buttons
        .map((btn, index) => ({ button: btn, id: index }));

    const initialLights = Array.from({ length: totalLights }).map(() => false);

    // Add first level
    const firstPossibleButtons = getPossibleNextButtons(
        initialLights,
        goal,
        buttonsWithId,
    );
    let matchingCombi = firstPossibleButtons.find(btn => btn.diff === 0);
    if (matchingCombi) {
        return 1;
    }

    let currentCombis: Combination[] = firstPossibleButtons
        .map(b => ({ buttons: [b.button], finalLights: pushButton(b.button.button, initialLights) }));
    let index = 0;


    do {
        const currentCombi = currentCombis[index];
        const combinations = addNextLayer(
            currentCombi,
            goal,
            buttonsWithId,
        );
        const matchingCombi = combinations.find(combi => combi.diff === 0);
        if (matchingCombi) {
            return matchingCombi.combi.length;
        }
        currentCombis = [
            ...currentCombis,
            ...combinations.map(c => ({ buttons: c.combi, finalLights: c.finalLights }))
        ]

        index++;
    } while (index < currentCombis.length)

    throw new Error('No Match found');
}


function addNextLayer(
    currentCombination: Combination,
    goal: Machine['indicatorLightsOn'],
    buttons: ButtonWithId[],
) {
    const { finalLights, buttons: curentCombinationButtons } = currentCombination;

    const lastButtonId = buttons.find(btn => curentCombinationButtons.at(-1)?.id === btn.id)?.id;
    const nextButtons = getPossibleNextButtons(
        finalLights,
        goal,
        buttons.filter(btn => btn.id !== lastButtonId),
    );
    const combinations: { combi: ButtonWithId[], diff: number, finalLights: boolean[] }[] = [];
    for (const { button, diff } of nextButtons) {
        combinations.push({
            combi: [...curentCombinationButtons, button],
            diff,
            finalLights: pushButton(button.button, finalLights)
        });
    }
    return combinations;
}