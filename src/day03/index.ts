import { getBanksFromInput } from "./getBanksFromInput.ts";
import { getMaxJoltageInBank } from "./getMaxJoltageInBank.ts";

export async function day03() {
    const banks = await getBanksFromInput();

    // PART 1
    let sum = 0;
    for (const bank of banks) {
        const maxJoltage = getMaxJoltageInBank(bank);
        sum += Number(maxJoltage);
    }
    console.log('Part 1 - Total output joltage', sum);
}