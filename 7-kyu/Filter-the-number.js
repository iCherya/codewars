/**
 * 7 kyu - Filter the number
 * https://www.codewars.com/kata/55b051fac50a3292a9000025
 */
const FilterString = (value) =>
    +value
        .split('')
        .filter((char) => !Number.isNaN(+char))
        .join('');
