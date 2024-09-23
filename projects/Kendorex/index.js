import moment from 'moment-timezone';

export function timeUntilNewYear(date) {
    const now = moment(date).tz(moment.tz.guess());
    const currentYear = now.year();
    const newYear = moment([currentYear + 1, 0, 1]).tz(moment.tz.guess());

    const timeLeft = moment.duration(newYear.diff(now));

    const days = Math.floor(timeLeft.asDays());
    const hours = timeLeft.hours();
    const minutes = timeLeft.minutes();
    const seconds = timeLeft.seconds();

    return { days, hours, minutes, seconds };
}