import { timeUntilNewYear } from './index.js';

const testCases = [
    {
        date: new Date(2024, 8, 22, 21, 0, 0),
        expected: { days: 100, hours: 3, minutes: 0, seconds: 0 }
    },
    {
        date: new Date(2024, 11, 11, 2, 13, 13),
        expected: { days: 20, hours: 21, minutes: 46, seconds: 47 }
    },
    {
        date: new Date(2024, 11, 31, 23, 59, 59),
        expected: { days: 0, hours: 0, minutes: 0, seconds: 1 }
    }
];

testCases.forEach((testCase, index) => {
    const result = timeUntilNewYear(testCase.date);
    const { days, hours, minutes, seconds } = result;

    if (days === testCase.expected.days && hours === testCase.expected.hours && minutes === testCase.expected.minutes && seconds === testCase.expected.seconds) {
        console.log(`Тест ${index + 1} пройден:`, result);
    } else {
        console.error(`Тест ${index + 1} провален:`, result, 'Ожидалось:', testCase.expected);
    }
});