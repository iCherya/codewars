/**
 * 8 kyu - Pirates!! Are the Cannons ready!??
 * https://www.codewars.com/kata/5748a883eb737cab000022a6
 */
const cannonsReady = (gunners) =>
    Object.values(gunners).filter((says) => says === 'nay').length > 0
        ? 'Shiver me timbers!'
        : 'Fire!';
