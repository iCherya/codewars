/**
 * 8 kyu - Find numbers which are divisible by given number
 * https://www.codewars.com/kata/55edaba99da3a9c84000003b
 */
const divisibleBy = (numbers, divisor) => numbers.filter((el) => el % divisor === 0);
