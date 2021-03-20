/**
 * 8 kyu - Palindrome Strings
 * https://www.codewars.com/kata/57a5015d72292ddeb8000b31
 */
const isPalindrome = (line) => line.toString() === line.toString().split('').reverse().join('');
