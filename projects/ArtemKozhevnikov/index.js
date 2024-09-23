function getTimeUntilNewYear() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const newYear = new Date(currentYear + 1, 0, 1);

  const timeDifference = newYear - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

function printCountdown() {
  const { days, hours, minutes, seconds } = getTimeUntilNewYear();
  console.log(`До Нового года осталось: ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`);
}

printCountdown();