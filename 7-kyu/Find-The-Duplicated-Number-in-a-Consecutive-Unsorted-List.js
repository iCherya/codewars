/**
 * 7 kyu - Find The Duplicated Number in a Consecutive Unsorted List
 * https://www.codewars.com/kata/558dd9a1b3f79dc88e000001
 */
const findDup = (arr) =>
    arr.sort((a, b) => a - b).filter((value, index, arr) => value === arr[index + 1])[0];
