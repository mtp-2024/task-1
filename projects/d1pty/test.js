import { NewYear } from './newYear.js';

function runTests() {
  const testCases = [
    { date: new Date('2024-12-25T00:00:00'), expected: { days: 7, hours: 0, minutes: 0, seconds: 0 } },
    { date: new Date('2024-01-01T00:00:00'), expected: { days: 366, hours: 0, minutes: 0, seconds: 0 } },
    { date: new Date('2024-06-15T12:00:00'), expected: { days: 199, hours: 12, minutes: 0, seconds: 0 } }
  ];

  testCases.forEach(({ date, expected }) => {
    const result = NewYear(date);
    const resultString = `${result.days} дней, ${result.hours} часов, ${result.minutes} минут, ${result.seconds} секунд`;
    const expectedString = `${expected.days} дней, ${expected.hours} часов, ${expected.minutes} минут, ${expected.seconds} секунд`;

    if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log(`Тест пройден для: ${date}`);
    } else {
      console.log(`Тест провален для: ${date}. ожидалось: ${expectedString}, получилось: ${resultString}`);
    }
  });
}

runTests();