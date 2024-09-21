import {DateTime, Duration, Info, Interval, Settings} from 'luxon'

export function DataCheck(data){
    var currentTime = data;
    var nextYear = currentTime.plus({ years: 1 }).startOf('year');
    var daysToNewYear = nextYear.diff(currentTime, ['days', 'hours', 'minutes', 'seconds']);
    return daysToNewYear;
}