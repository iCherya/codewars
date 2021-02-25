/**
 * 7 kyu - Largest 5 digit number in a series
 * https://www.codewars.com/kata/51675d17e0c1bed195000001
 */
const solution = (digits) => {
    let max = 0;

    for (let i = 0; i < digits.length; i++) {
        max = Math.max(max, parseInt(digits.slice(i, i + 5)));
    }

    return max;
};
