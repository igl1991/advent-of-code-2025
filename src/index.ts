import { day01 } from "./day01/index.ts";
import { day02 } from "./day02/index.ts";

const day = process.argv[2];
if (!day.startsWith('day')) {
    console.error('Add the day argument with e.g. -- day01')
}

switch (day) {
    case 'day01':
        day01();

    case 'day02':
        day02();
}