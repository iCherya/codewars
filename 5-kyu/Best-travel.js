/**
 * 5 kyu - Best travel
 * https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa
 */
const chooseBestSum = (t, k, ls) =>
  ls
    .reduce((acc, curr) => [...acc, ...acc.map((option) => [...option, curr])], [[]])
    .filter((option) => option.length === k)
    .map((option) => option.reduce((acc, curr) => acc + curr), 0)
    .filter((sum) => sum <= t)
    .sort((a, b) => a - b)
    .pop() || null;
