/**
 * 7 kyu - Noonerize Me
 * https://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd
 */
const noonerize = (numbers) => {
  if (numbers.some(isNaN)) return 'invalid array';

  return Math.abs(
    numbers
      .map((val, idx) => `${numbers[idx ^ 1]}`[0] + `${val}`.slice(1))
      .reduce((prev, curr) => prev - curr)
  );
};
