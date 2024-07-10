const lastDayOfMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/**
 * Calculate the new date by adding n number of month to the given date string.
 *
 * @param {string} dateString - The original date string in the format 'dd-mm-yyyy'
 * @param {number} n - Number of month(s) to add to the original date
 * @return {Date} The new date after adding n number of month(s)
 */
function addMonthToDate(dateString, n) {

    const [date, month, year] = dateString.split('-').map(num => Number(num));

    let newYear, newMonth, newDate;

    newYear = year + Math.floor((month + n) / 12);
    newMonth = (month + n) % 12;

    if (newMonth === 2) { // February
        const lastDayOfMonth = isLeapYear(newYear) ? 29 : 28;
        if (date > lastDayOfMonth) {
            newDate = lastDayOfMonth;
        }
    }
    else if (isLastDayOfMonth(date, month, year)) {
        newDate = getLastDateOfMonth(newMonth);
    }
    else {
        newDate = date;
    }

    return new Date(newYear, newMonth - 1, newDate);
}

function isLastDayOfMonth(date, month, year) {
    if (isLeapYear(year) && month === 2) {
        return date === 29;
    }
    return date === lastDayOfMonth[month];
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getLastDateOfMonth(month) {
    return lastDayOfMonth[month];
}

module.exports = { addMonthToDate }