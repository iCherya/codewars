/**
 * 8 kyu - Cat years, Dog years
 * https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
 */
const humanYearsCatYearsDogYears = (y) => [y, (y - 1 ? 16 : 11) + 4 * y, (y - 1 ? 14 : 10) + 5 * y];
