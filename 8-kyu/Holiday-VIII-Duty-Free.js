/**
 * 8 kyu - Holiday VIII - Duty Free
 * https://www.codewars.com/kata/57e92e91b63b6cbac20001e5
 */
const dutyFree = (normPrice, discount, hol) => Math.floor(hol / ((normPrice * discount) / 100));
