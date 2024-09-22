//getTimeUntilNewYear(new Date());

export function getTimeUntilNewYear(date) {
    const date_now = date;
    //console.log(date_now);
    const date_NEWYEAR = new Date(date_now.getFullYear()+1, 0, 1);
    //console.log(date_NEWYEAR);
    const days = (date_NEWYEAR-date_now) / (1000 * 60 * 60 * 24);
    //console.log("До нового года осталось", days.toFixed(1), "дней");
    return days.toFixed(0);
}