/**
 * 8 kyu - Is your period late?
 * https://www.codewars.com/kata/578a8a01e9fd1549e50001f1
 */
const periodIsLate = (last, today, cycleLength) =>
    Math.floor(today.getTime() - last.getTime()) / (24 * 60 * 60 * 1000) > cycleLength;
