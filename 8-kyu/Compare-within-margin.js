/**
 * 8 kyu - Compare within margin
 * https://www.codewars.com/kata/56453a12fcee9a6c4700009c
 */
const closeCompare = (a, b, margin = 0) => {
    if (margin >= Math.abs(a - b)) return 0;

    return a < b ? -1 : 1;
};
