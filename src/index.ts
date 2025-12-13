import { day01 } from "./day01/index.ts";
import { day02 } from "./day02/index.ts";
import { day03 } from "./day03/index.ts";
import { day04 } from "./day04/index.ts";
import { day05 } from "./day05/index.ts";
import { day06 } from "./day06/index.ts";
import { day10 } from "./day10/index.ts";

const day = process.argv[2];
if (!day.startsWith('day')) {
    console.error('Add the day argument with e.g. -- day01')
}

switch (day) {
    case 'day01':
        day01();
        break;

    case 'day02':
        day02();
        break;

    case 'day03':
        day03();
        break;

    case 'day04':
        day04();
        break;
    
    case 'day05':
        day05();
        break;

    case 'day06':
        day06();

    case 'day10':
        day10();
}