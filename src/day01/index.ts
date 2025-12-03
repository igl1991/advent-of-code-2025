import { getPasswordComplicated } from "./getPasswordComplicated.ts";
import { getPasswordFromPositions } from "./getPasswordFromPositions.ts";
import { getPositionsFromSequence } from "./getPositionsFromSequence.ts";
import { getSequenceFromInput } from "./getSequenceFromInput.ts";

export async function day01() {
    const startPosition = 50;
    const sequence = await getSequenceFromInput();

    // PART 1
    const positions = getPositionsFromSequence(startPosition, sequence);
    let password = getPasswordFromPositions(positions);
    console.log('Part 1 - Got Password', password);

    // PART 2
    password = getPasswordComplicated(startPosition, sequence);
    console.log('Part 2 - Got Password', password);

}