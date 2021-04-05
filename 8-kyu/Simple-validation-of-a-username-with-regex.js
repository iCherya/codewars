/**
 * 8 kyu - Simple validation of a username with regex
 * https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023
 */
const validateUsr = (username) => /^([a-z]|\d|_){4,16}$/.test(username);
