/**
 * 6 kyu - Grouped by commas
 * https://www.codewars.com/kata/5274e122fc75c0943d000148
 */
const groupByCommas = (n) => {
    const arr = n.toString().split('').reverse();

    for (let i = arr.length - 1; i >= 1; i--) {
        if (i % 3 === 0) {
            arr.splice(i, 0, ',');
        }
    }

    return arr.reverse().join('');
};
