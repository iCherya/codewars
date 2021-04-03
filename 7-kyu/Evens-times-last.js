/**
 * 7 kyu - Evens times last
 * https://www.codewars.com/kata/5a1a9e5032b8b98477000004
 */
const evenLast = (numbers) =>
    (numbers[numbers.length - 1] || 0) *
    numbers.filter((_, idx) => idx % 2 === 0).reduce((acc, curr) => acc + curr, 0);
