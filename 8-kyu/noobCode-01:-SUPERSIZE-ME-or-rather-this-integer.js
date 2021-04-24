/**
 * 8 kyu - noobCode 01: SUPERSIZE ME.... or rather, this integer!
 * https://www.codewars.com/kata/5709bdd2f088096786000008
 */
const superSize = (num) =>
    +num
        .toString()
        .split('')
        .map(Number)
        .sort((a, b) => b - a)
        .join('');
