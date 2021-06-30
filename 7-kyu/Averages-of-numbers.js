/**
 * 7 kyu - Averages of numbers
 * https://www.codewars.com/kata/57d2807295497e652b000139
 */
const averages = (numbers) =>
    numbers ? numbers.map((num, idx, nums) => (num + nums[idx + 1]) / 2).slice(0, -1) : [];
