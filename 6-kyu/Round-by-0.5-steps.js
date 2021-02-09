/**
 * 6 kyu - Round by 0.5 steps
 * https://www.codewars.com/kata/51f1342c76b586046800002a
 */
const solution = (n) => {
    const floored = Math.floor(n);
    const middle = floored + 0.5;

    if (n < middle) {
        if (n < middle - 0.25) return floored;
        else return middle;
    } else {
        if (n >= middle + 0.25) return floored + 1;
        else return middle;
    }
};

const solution2 = (n) => Math.round(n * 2) / 2;
