/**
 * 7 kyu - All unique
 * https://www.codewars.com/kata/553e8b195b853c6db4000048
 */
const hasUniqueChars = (str) => str.length === new Set(str).size;
