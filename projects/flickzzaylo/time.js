export function GetDaysToNY(date){
    var currentTime = date
    var nextYear = currentTime.plus({ years: 1 }).startOf('year');
    var daysToNewYear = nextYear.diff(currentTime, ['days', 'hours', 'minutes', 'seconds']);
    return daysToNewYear;
    // console.log(`До Нового года осталось: ${daysToNewYear.days} дней, ${daysToNewYear.hours} часов, ${daysToNewYear.minutes} минут`);
}

