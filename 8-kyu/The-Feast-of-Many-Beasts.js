/**
 * 8 kyu - The Feast of Many Beasts
 * https://www.codewars.com/kata/5aa736a455f906981800360d
 */
const feast = (beast, dish) => beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
