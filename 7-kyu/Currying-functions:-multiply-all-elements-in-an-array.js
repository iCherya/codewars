/**
 * 7 kyu - Currying functions: multiply all elements in an array
 * https://www.codewars.com/kata/586909e4c66d18dd1800009b
 */
const multiplyAll = (arr) => (factor) => arr.map((number) => number * factor);
