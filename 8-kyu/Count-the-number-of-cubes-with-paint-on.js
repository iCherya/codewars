/**
 * 8 kyu - Count the number of cubes with paint on
 * https://www.codewars.com/kata/5763bb0af716cad8fb000580
 */
const countSquares = (cuts) => (cuts ? 6 * Math.pow(cuts, 2) + 2 : 1);
