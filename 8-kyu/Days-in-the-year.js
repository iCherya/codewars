/**
 * 8 kyu - Days in the year
 * https://www.codewars.com/kata/56d6c333c9ae3fc32800070f
 */
const yearDays = (year) => {
    const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    return isLeapYear(year) ? `${year} has 366 days` : `${year} has 365 days`;
};
