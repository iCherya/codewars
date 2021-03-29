/**
 * 8 kyu - Hello, Name or World!
 * https://www.codewars.com/kata/57e3f79c9cb119374600046b
 */
const hello = (s) => `Hello, ${s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : 'World'}!`;
