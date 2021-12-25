/**
 * 7 kyu - Bumps in the Road
 * https://www.codewars.com/kata/57ed30dde7728215300005fa
 */
const bump = (x) =>
  x.split('').filter((char) => char === 'n').length > 15
    ? 'Car Dead'
    : 'Woohoo!';
