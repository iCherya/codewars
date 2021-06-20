/**
 * 7 kyu - Greatest common divisor
 * https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd
 */
const mygcd = (a, b) => {
    if (b === 0) return a;
    return mygcd(b, a % b);
};
