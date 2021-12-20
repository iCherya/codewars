/**
 * 7 kyu - Next Prime
 * https://www.codewars.com/kata/58e230e5e24dde0996000070
 */
const nextPrime = (number) => {
  const isPrime = (n) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) return false;
    }

    return n > 1;
  };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    number += 1;
    if (isPrime(number)) return number;
  }
};
