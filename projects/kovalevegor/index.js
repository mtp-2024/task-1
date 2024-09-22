const getTimeUntilNewYear = require('./countdown');

function testCountdown() {
  const testCases = [
    new Date('December 30, 2023 23:59:59'),
    new Date('January 1, 2023 00:00:00'),
    new Date('November 1, 2023 12:00:00'),
  ];

  testCases.forEach((testDate, index) => {
    const result = getTimeUntilNewYear(testDate);
    console.log(`Test case ${index + 1}:`);
    console.log(`Days: ${result.days}, Hours: ${result.hours}, Minutes: ${result.minutes}, Seconds: ${result.seconds}`);
    
    // Простые проверки (if)
    if (result.days >= 0 && result.hours >= 0 && result.minutes >= 0 && result.seconds >= 0) {
      console.log(`Test case ${index + 1} passed!`);
    } else {
      console.log(`Test case ${index + 1} failed!`);
    }
  });
}

testCountdown();
