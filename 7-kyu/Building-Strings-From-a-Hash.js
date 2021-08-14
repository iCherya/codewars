/**
 * 7 kyu - Building Strings From a Hash
 * https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2
 */
const solution = (pairs) =>
    Object.entries(pairs)
        .map((pair) => pair.join(' = '))
        .join(',');
