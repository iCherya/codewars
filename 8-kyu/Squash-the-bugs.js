/**
 * 8 kyu - Squash the bugs
 * https://www.codewars.com/kata/56f173a35b91399a05000cb7
 */
const findLongest = (str) => str.split(' ').sort((a, b) => b.length - a.length)[0].length;
