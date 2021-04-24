/**
 * 8 kyu - Determine offspring sex based on genes XX and XY chromosomes
 * https://www.codewars.com/kata/56530b444e831334c0000020
 */
const chromosomeCheck = (sperm) =>
    "Congratulations! You're going to have a " + (sperm[1] === 'Y' ? 'son' : 'daughter') + '.';
