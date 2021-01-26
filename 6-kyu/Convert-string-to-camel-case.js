/**
 * 6 kyu - Convert string to camel case
 * https://www.codewars.com/kata/517abf86da9663f1d2000003
 */
const toCamelCase = (str) =>
    str.replace(/(?<=[\_|\-])\w/gi, (a) => a.toUpperCase()).replace(/(\-|\_)/g, '') || '';
