/**
 * 8 kyu - Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
 * https://www.codewars.com/kata/57256064856584bc47000611
 */
const howManySmaller = (arr, n) =>
    arr.reduce((acc, curr) => acc + (curr.toFixed(2) < n ? 1 : 0), 0);
