/**
 * 7 kyu - Return the Missing Element
 * https://www.codewars.com/kata/5299413901337c637e000004
 */
const getMissingElement = (arr) => 45 - arr.reduce((acc, curr) => acc + curr, 0);
