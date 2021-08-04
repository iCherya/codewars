/**
 * 8 kyu - Arguments to Binary addition
 * https://www.codewars.com/kata/57642a90dee2da8dd3000161
 */
const arr2bin = (arr) =>
    arr.reduce((acc, curr) => acc + (typeof curr === 'number' ? curr : 0), 0).toString(2);
