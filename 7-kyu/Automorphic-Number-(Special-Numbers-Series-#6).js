/**
 * 7 kyu - Automorphic Number (Special Numbers Series #6)
 * https://www.codewars.com/kata/5a58d889880385c2f40000aa
 */
const automorphic = (n) =>
    n === Math.pow(n, 2) % Math.pow(10, n.toString().length) ? 'Automorphic' : 'Not!!';
