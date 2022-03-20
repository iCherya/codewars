/**
 * 8 kyu - Enumerable Magic #20 - Cascading Subsets
 * https://www.codewars.com/kata/545af3d185166a3dec001190
 */
const eachCons = (array, n) => {
  const result = [];

  for (let i = 0; i <= array.length - n; i += 1) {
    const subset = array.slice(i, n + i);
    result.push(subset);
  }

  return result;
};
