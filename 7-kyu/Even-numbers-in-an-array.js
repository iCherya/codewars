/**
 * 7 kyu - Even numbers in an array
 * https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c
 */
const evenNumbers = (array, number) => array.filter((el) => el % 2 === 0).slice(-number);
