/**
 * 7 kyu - Mumbling
 * https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
 */
const accum = (s) =>
    s
        .split('')
        .map((el, idx) => el.toUpperCase() + el.toLowerCase().repeat(idx))
        .join('-');
