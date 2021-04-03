/**
 * 8 kyu - Merge two sorted arrays into one
 * https://www.codewars.com/kata/5899642f6e1b25935d000161
 */
const mergeArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
