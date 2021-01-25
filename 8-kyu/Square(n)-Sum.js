/**
 * 8 kyu - Square(n) Sum
 * https://www.codewars.com/kata/515e271a311df0350d00000f
 */
const squareSum = (numbers) => numbers.map((num) => num ** 2).reduce((acc, curr) => acc + curr, 0);
