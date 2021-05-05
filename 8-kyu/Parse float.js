/**
 * 8 kyu - Parse float
 * https://www.codewars.com/kata/57a386117cb1f31890000039
 */
const parseF = (s) => (Number.isNaN(parseFloat(s)) ? null : parseFloat(s));
