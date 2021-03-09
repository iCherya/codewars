/**
 * 8 kyu - Grasshopper - Messi goals function
 * https://www.codewars.com/kata/55f73be6e12baaa5900000d4
 */
const goals = (...args) => args.reduce((acc, curr) => acc + curr, 0);
