/**
 * 8 kyu - Miles per gallon to kilometers per liter
 * https://www.codewars.com/kata/557b5e0bddf29d861400005d
 */
const converter = (mpg) => Number(((mpg * 1.609344) / 4.54609188).toFixed(2));
