/**
 * 7 kyu - Maximum Length Difference
 * https://www.codewars.com/kata/5663f5305102699bad000056
 */
const mxdiflg = (a1, a2) => {
    let max = -1;

    for (const arr1 of a1) {
        for (const arr2 of a2) {
            max = Math.max(max, Math.abs(arr1.length - arr2.length));
        }
    }

    return max;
};
