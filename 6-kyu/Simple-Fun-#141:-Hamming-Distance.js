/**
 * 6 kyu - Simple Fun #141: Hamming Distance
 * https://www.codewars.com/kata/58a6af7e8c08b1e9c40001c1
 */
const hammingDistance = (x, y) =>
    (x ^ y)
        .toString(2)
        .split('')
        .filter((el) => el === '1').length;
