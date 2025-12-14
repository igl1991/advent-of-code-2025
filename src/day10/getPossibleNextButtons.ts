import { getDiff } from "./getDiff";
import { pushButton } from "./pushButton";
import type { Machine, Button, ButtonWithId } from "./types";

type PossibleButton = {
    button: ButtonWithId;
    diff: number;
}

export function getPossibleNextButtons(
    currentLights: boolean[],
    goal: Machine['indicatorLightsOn'],
    buttons: ButtonWithId[]
) {
    const currentDiff = getDiff(currentLights, goal);

    const possibleButtons: PossibleButton[] = [];

    for (const button of buttons) {
        const diff = getDiff(pushButton(button.button, currentLights), goal);

        // if (diff > currentDiff) continue

        possibleButtons.push({
            button,
            diff,
        })
    }

    return possibleButtons.sort((left, right) => left.diff < right.diff ? -1 : 1);
}