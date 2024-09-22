import { getTimeUntilNewYear } from "./index.js";

var date1 = new Date("September 22, 2024");
const test1 = getTimeUntilNewYear(date1);
if (test1 > 100) {
    console.log("До нового года осталось", test1, "дней");
}
else {
    console.error(`Функция вернула не верное число дней: ${test1}`);
}

var date2 = new Date("August 22, 2011");
const test2 = getTimeUntilNewYear(date2);
if (test2 > 131) {
    console.log("До нового года осталось", test2, "дней");
}
else {
    console.error(`Функция вернула не верное число дней: ${test2}`);
}

var date3 = new Date("December 10, 2002");
const test3 = getTimeUntilNewYear(date3);
if (test3 > 21) {
    console.log("До нового года осталось", test3, "дней");
}
else {
    console.error(`Функция вернула не верное число дней: ${test3}`);
}