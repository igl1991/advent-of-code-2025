import { getDiff } from "./getDiff";
import { pushButton } from "./pushButton";
import type { Machine, Button } from "./types";

type PossibleButton = {
    button: Button;
    index: number;
    diff: number;
}

export function getPossibleNextButtons(
    currentLights: boolean[],
    goal: Machine['indicatorLightsOn'],
    buttons: Button[]
) {
    const currentDiff = getDiff(currentLights, goal);

    const possibleButtons: PossibleButton[] = [];

    for (const [index, button] of buttons.entries()) {
        const diff = getDiff(pushButton(button, currentLights), goal);

        if (diff > currentDiff) continue

        possibleButtons.push({
            button,
            index,
            diff,
        })
    }

    return possibleButtons;
}