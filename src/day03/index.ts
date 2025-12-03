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

    // PART 2
    sum = 0;
    for (const bank of banks) {
        const maxJoltage = getMaxJoltageInBank(bank, 12);
        sum += Number(maxJoltage);
    }
    console.log('Part 2 - Total output joltage', sum);
}