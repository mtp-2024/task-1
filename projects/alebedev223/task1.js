
export function DateTest(date){
    const nextYear = date.getFullYear()+1;
    const newYear = new Date(nextYear,0,0);
    const msTime = newYear-date;
    const secTime = Math.floor((msTime/1000));
    const minTime = Math.floor(secTime/60);
    const hourTime = Math.floor(minTime/60);
    const daysTime = Math.floor(hourTime/24);
    return daysTime;
}