import { getPasswordFromPositions } from "./getPasswordFromPositions.ts";
import { getPositionsFromSequence } from "./getPositionsFromSequence.ts";
import { getSequenceFromInput } from "./getSequenceFromInput.ts";

export async function day01() {
    const startPosition = 50;
    const sequence = await getSequenceFromInput();


    // PART 1
    const positions = getPositionsFromSequence(startPosition, sequence);
    const password = getPasswordFromPositions(positions);
    console.log('Got Password', password);
}