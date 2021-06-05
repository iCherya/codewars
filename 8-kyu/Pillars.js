/**
 * 8 kyu - Pillars
 * https://www.codewars.com/kata/5bb0c58f484fcd170700063d
 */
const pillars = (numPill, dist, width) =>
    numPill > 1 ? (dist * 100 + width) * (numPill - 1) - width : 0;
