import { timeUntilNewYear } from "./time.js";

var date_one = new Date(2023, 9, 9);
var date_two = new Date(2003, 0, 15);
var date_three = new Date(2013, 10, 25);

const test_one = timeUntilNewYear(date_one);
if (test_one == 84) {
    console.log("Ответ верный");
}
else {
    console.error("Ответ неверный")
}

const test_two = timeUntilNewYear(date_two);
if (test_two == 351) {
    console.log("Ответ верный");
}
else {
    console.error("Ответ неверный")
}

const test_three = timeUntilNewYear(date_three);
if (test_three == 37) {
    console.log("Ответ верный");
}
else {
    console.error("Ответ неверный")
}