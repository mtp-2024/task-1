export function NewYearTimer(currentDate) {
    const newYear = new Date(currentDate.getFullYear() + 1, 0, 1, 0, 0, 0);
    const duration = newYear - currentDate;

    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const seconds = Math.floor((duration / 1000) % 60);

    return { days, hours, minutes, seconds };
}
