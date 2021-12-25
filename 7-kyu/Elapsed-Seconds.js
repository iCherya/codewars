/**
 * 7 kyu - Elapsed Seconds
 * https://www.codewars.com/kata/517b25a48557c200b800000c
 */
const elapsedSeconds = (startDate, endDate) =>
  Math.floor((endDate.getTime() - startDate.getTime()) / 1000);
