/**
 * 8 kyu - How old will I be in 2099?
 * https://www.codewars.com/kata/5761a717780f8950ce001473
 */
const calculateAge = (a, b) => {
    if (a === b) return `You were born this very year!`;
    const year = Math.abs(a - b) === 1 ? 'year' : 'years';

    if (a > b) return `You will be born in ${a - b} ${year}.`;

    return `You are ${b - a} ${year} old.`;
};
