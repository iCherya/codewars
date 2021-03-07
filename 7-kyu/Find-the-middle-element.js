/**
 * 7 kyu - Find the middle element
 * https://www.codewars.com/kata/545a4c5a61aa4c6916000755
 */
const gimme = (inputArray) =>
    inputArray.map((el, idx) => [el, idx]).sort((a, b) => a[0] - b[0])[1][1];
