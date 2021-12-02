/**
 * 7 kyu - shorter concat [reverse longer]
 * https://www.codewars.com/kata/54557d61126a00423b000a45
 */
const shorter_reverse_longer = (a, b) => {
  const getReversed = (string) => string.split('').reverse().join('');

  return a.length < b.length
    ? `${a}${getReversed(b)}${a}`
    : `${b}${getReversed(a)}${b}`;
};
