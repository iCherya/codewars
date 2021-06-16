/**
 * 8 kyu - Is the date today
 * https://www.codewars.com/kata/563c13853b07a8f17c000022
 */
const isToday = (date) => new Date(Date.now()).toDateString() === date.toDateString();
