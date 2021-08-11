/**
 * 7 kyu - Most digits
 * https://www.codewars.com/kata/58daa7617332e59593000006
 */
const findLongest = (array) =>
    +array
        .map((el, idx) => [el.toString(), idx])
        .sort((a, b) => {
            if (a[0].length === b[0].length) return a[1] - b[1];
            return b[0].length - a[0].length;
        })[0][0];
