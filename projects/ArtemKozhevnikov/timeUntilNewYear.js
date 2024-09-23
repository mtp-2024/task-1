function getTimeUntilNewYear(date) {
  const now = date || new Date();
  const currentYear = now.getFullYear();
  const newYear = new Date(currentYear + 1, 0, 1);

  const timeDifference = newYear - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

module.exports = getTimeUntilNewYear;