export function NewYear(currentDate) {
    const nextNewYear = new Date(currentDate.getFullYear() + 1, 0, 1);
  
    const diff = nextNewYear - currentDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  }