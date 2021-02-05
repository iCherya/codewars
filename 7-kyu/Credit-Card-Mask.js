/**
 * 7 kyu - Credit Card Mask
 * https://www.codewars.com/kata/5412509bd436bd33920011bc
 */
const maskify = (cc) => cc.slice(-4).padStart(cc.length, '#');
