const getTimeUntilNewYear = require('./timeUntilNewYear');

const cases = [
  {
    date: new Date('2023-12-31T23:59:59'),
    expected: { days: 0, hours: 0, minutes: 0, seconds: 1 }
  },
  {
    date: new Date('2023-12-31T00:00:00'),
    expected: { days: 1, hours: 0, minutes: 0, seconds: 0 }
  },
  {
    date: new Date('2023-01-01T00:00:00'),
    expected: { days: 365, hours: 0, minutes: 0, seconds: 0 }
  }
];

cases.forEach(({ date, expected }, index) => {
  const result = getTimeUntilNewYear(date);
  
  const isEqual = (
    result.days === expected.days &&
    result.hours === expected.hours &&
    result.minutes === expected.minutes &&
    result.seconds === expected.seconds
  );
  
  if (isEqual) {
    console.log(`Test case ${index + 1} passed.`);
  } else {
    console.error(`Test case ${index + 1} failed. Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(result)}`);
  }
});
