/**
 * 6 kyu - Is a number prime?
 * https://www.codewars.com/kata/5262119038c0985a5b00029f
 */
const isPrime = (n) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) return false;
    }

    return n > 1;
};
