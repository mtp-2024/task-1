export function timeUntilNewYear(date) {
const now = date;
const nextYear = now.getFullYear() + 1;
const newYearDate = new Date(nextYear, 0, 1); 
const diff = newYearDate - now;

const seconds = Math.floor((diff / 1000) % 60);
const minutes = Math.floor((diff / (1000 * 60)) % 60);
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const days = Math.floor(diff / (1000 * 60 * 60 * 24));

//console.log("До нового года осталось", days, "дней", hours, "часов", minutes, "минут", seconds, "секунд");

return days;
}