/**
 * 8 kyu - validate code with simple regex
 * https://www.codewars.com/kata/56a25ba95df27b7743000016
 */
const validateCode = (code) => !!code.toString().match(/^[1-3]/gi);
