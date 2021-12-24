/**
 * 6 kyu - Prime Factors
 * https://www.codewars.com/kata/542f3d5fd002f86efc00081a
 */
const prime_factors = (num, res = []) => {
  if (num === 1) return [];

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      res.push(i);
      return prime_factors(num / i, res);
    }
  }

  return [...res, num];
};
