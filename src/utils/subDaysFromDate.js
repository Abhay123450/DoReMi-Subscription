/**
 * Subtracts a given number of days from a given date and returns the resulting date.
 *
 * @param {Date} date - The date from which to subtract the days.
 * @param {number} n - The number of days to subtract.
 * @return {Date} The resulting date after subtracting the given number of days.
 */
function subDaysFromDate(date, n) {
    const msInOneDay = 24 * 60 * 60 * 1000;
    return new Date(date - (n * msInOneDay));
}

module.exports = { subDaysFromDate }