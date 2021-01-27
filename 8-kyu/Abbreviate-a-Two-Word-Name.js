/**
 * 8 kyu - Abbreviate a Two Word Name
 * https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
 */
const abbrevName = (name) =>
    name
        .split(' ')
        .map((el) => el.slice(0, 1).toUpperCase())
        .join('.');
