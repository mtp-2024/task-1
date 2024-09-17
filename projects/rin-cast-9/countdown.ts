export function timeUntilNewYear(date: Date): { days: number, hours: number, minutes: number, seconds: number } {
    const nextYear = date.getFullYear() + 1;
    const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
    const timeUntilNewYear = newYear.getTime() - date.getTime();

    const seconds: number = Math.floor((timeUntilNewYear / 1000) % 60);
    const minutes: number = Math.floor((timeUntilNewYear / 60000) % 60);
    const hours: number = Math.floor((timeUntilNewYear / 3600000) % 24);
    const days: number = Math.floor(timeUntilNewYear / 86400000);

    return {days, hours, minutes, seconds};
}