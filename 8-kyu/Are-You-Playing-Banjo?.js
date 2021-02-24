/**
 * 8 kyu - Are You Playing Banjo?
 * https://www.codewars.com/kata/53af2b8861023f1d88000832
 */
const areYouPlayingBanjo = (name) =>
    name + (name[0].toLowerCase() === 'r' ? ' plays banjo' : ' does not play banjo');
