/**
 * 8 kyu - Word Count
 * https://www.codewars.com/kata/570cc83df616a85944001315
 */
const countWords = (str) => str.split(/\s/g).filter(Boolean).length;
