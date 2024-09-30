const timeDueNewYear = (date) => {
    var now;
    if (date) {
        now = date;
    } else {
        now = new Date();
    }
    const currentYear = now.getFullYear();
    const nextNewYear = new Date(`January 1, ${currentYear + 1} 00:00:00`);

    const diff = nextNewYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { "days": days, "hours": hours, "minutes": minutes, "seconds": seconds };
}

module.exports = { timeDueNewYear }