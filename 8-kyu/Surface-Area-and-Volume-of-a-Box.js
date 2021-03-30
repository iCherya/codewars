/**
 * 8 kyu - Surface Area and Volume of a Box
 * https://www.codewars.com/kata/565f5825379664a26b00007c
 */
const getSize = (w, h, d) => [2 * (w * h + w * d + h * d), w * h * d];
