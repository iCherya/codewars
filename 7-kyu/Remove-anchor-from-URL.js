/**
 * 7 kyu - Remove anchor from URL
 * https://www.codewars.com/kata/51f2b4448cadf20ed0000386
 */
const removeUrlAnchor = (url) => (url.includes('#') ? url.split('#')[0] : url);
