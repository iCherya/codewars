/**
 * 8 kyu - Find the Slope
 * https://www.codewars.com/kata/55a75e2d0803fea18f00009d
 */
const slope = ([x1, y1, x2, y2]) => (x2 === x1 ? 'undefined' : ((y2 - y1) / (x2 - x1)).toString());
