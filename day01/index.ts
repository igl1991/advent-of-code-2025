import { getPasswordFromPositions } from "./getPasswordFromPositions.ts";
import { getPositionsFromSequence } from "./getPositionsFromSequence.ts";
import { getSequenceFromInput } from "./getSequenceFromInput.ts";


async function main() {
    const startPosition = 50;
    const sequence = await getSequenceFromInput();
    const positions = getPositionsFromSequence(startPosition, sequence);
    const password = getPasswordFromPositions(positions);
    console.log('Got Password', password);
}

main().then(() => console.log('done!'))