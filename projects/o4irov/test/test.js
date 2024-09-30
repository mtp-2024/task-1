// import { timeDueNewYear } from "@/utils/timeDueNewYear";
const { timeDueNewYear } = require('../src/utils/timeDueNewYear');

console.log("testing timeDueNewYear");

const firstDate = new Date('1995-12-17T03:24:00');
const secDate = new Date('2003-10-11T10:25:00');
const thirdDate = new Date('2002-09-25T11:55:00');

const firstResult = timeDueNewYear(firstDate);
if (firstResult['days'] == 14 && firstResult['hours'] == 20 && firstResult['minutes'] == 36 && firstResult['seconds'] == 0) {
    console.log('first test passed!');
} else {
    throw new Error('first test failed');
}

const secondResult = timeDueNewYear(secDate);
if (secondResult['days'] == 81 && secondResult['hours'] == 14 && secondResult['minutes'] == 35 && secondResult['seconds'] == 0) {
    console.log('second test passed!');
} else {
    throw new Error('second test failed');
}

const thirdResult = timeDueNewYear(thirdDate);
if (thirdResult['days'] == 97 && thirdResult['hours'] == 13 && thirdResult['minutes'] == 5 && thirdResult['seconds'] == 0) {
    console.log('third test passed!');
} else {
    throw new Error('third test failed');
}

console.log("all tests passed!");