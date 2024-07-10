function isValidDate(dateString) {
    if (!dateString) {
        return false;
    }
    // Check the pattern to ensure it matches dd-mm-yyyy format
    const regex = /^(\d{2})-(\d{2})-(\d{4})$/;
    const match = dateString.match(regex);

    if (!match) return false;

    // Extract the parts of the date
    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);

    // Check the ranges of month and year
    if (month < 1 || month > 12 || year < 1000 || year > 9999) return false;

    // List of days in each month (index 0 is a placeholder for convenience)
    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check for leap year and adjust February days
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        daysInMonth[2] = 29;
    }

    // Check the range of the day
    return day > 0 && day <= daysInMonth[month];
}

module.exports = { isValidDate }