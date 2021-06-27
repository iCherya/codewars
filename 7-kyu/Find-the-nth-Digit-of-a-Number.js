/**
 * 7 kyu - Find the nth Digit of a Number
 * https://www.codewars.com/kata/577b9960df78c19bca00007e
 */
const findDigit = (num, nth) => {
    if (nth <= 0) return -1;

    if (num < 0) num *= -1;
    num = num.toString();
    if (nth > num.length) return 0;

    return +num[num.length - nth];
};
