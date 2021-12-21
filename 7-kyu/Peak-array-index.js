/**
 * 7 kyu - Peak array index
 * https://www.codewars.com/kata/5a61a846cadebf9738000076
 */
const peak = (arr) => {
  const getSum = (nums) => nums.reduce((a, c) => a + c, 0);

  for (let i = 0; i < arr.length; i++) {
    const prev = getSum(arr.slice(0, i));
    const next = getSum(arr.slice(i + 1));

    if (prev === next) return i;
  }

  return -1;
};
