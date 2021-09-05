/**
 * 6 kyu - String array duplicates
 * https://www.codewars.com/kata/59f08f89a5e129c543000069
 */
const dup = (s) =>
    s.map((word) =>
        word.split('').reduce((acc, curr) => acc + (acc[acc.length - 1] === curr ? '' : curr))
    );
