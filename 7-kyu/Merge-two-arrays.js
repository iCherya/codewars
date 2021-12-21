/**
 * 7 kyu - Merge two arrays
 * https://www.codewars.com/kata/583af10620dda4da270000c5
 */
const mergeArrays = (a, b) => {
  const result = [];
  const summary = a.length + b.length;

  let i = 0;
  while (result.length < summary) {
    a[i] !== undefined && result.push(a[i]);
    b[i] !== undefined && result.push(b[i]);
    i += 1;
  }

  return result;
};
