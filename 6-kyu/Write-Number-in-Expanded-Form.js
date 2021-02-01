/**
 * 6 kyu - Write Number in Expanded Form
 * https://www.codewars.com/kata/5842df8ccbd22792a4000245
 */
const expandedForm = (n) =>
    n
        .toString()
        .split('')
        .map((digit, idx, arr) => digit + '0'.repeat(arr.length - idx - 1))
        .filter(Number)
        .join(' + ');
