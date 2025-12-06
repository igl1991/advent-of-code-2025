import { day01 } from "./day01/index.ts";
import { day02 } from "./day02/index.ts";
import { day03 } from "./day03/index.ts";
import { day04 } from "./day04/index.ts";

const day = process.argv[2];
if (!day.startsWith('day')) {
    console.error('Add the day argument with e.g. -- day01')
}

switch (day) {
    case 'day01':
        day01();

    case 'day02':
        day02();

    case 'day03':
        day03();

    case 'day04':
        day04();
}