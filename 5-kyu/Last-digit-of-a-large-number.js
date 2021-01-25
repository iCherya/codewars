/**
 * 5 kyu - Last digit of a large number
 * https://www.codewars.com/kata/5511b2f550906349a70004e1
 */
const lastDigit = (str1, str2) =>
    +!+str2 || Math.pow(str1.slice(-1) % 10, str2.slice(-2) % 4 || 4) % 10;
