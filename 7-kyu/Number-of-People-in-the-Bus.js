/**
 * 7 kyu - Number of People in the Bus
 * https://www.codewars.com/kata/5648b12ce68d9daa6b000099
 */
const number = (busStops) =>
    busStops.reduce((acc, [peopleIn, peopleOut]) => acc + peopleIn - peopleOut, 0);
