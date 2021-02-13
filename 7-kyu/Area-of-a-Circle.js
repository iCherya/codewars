/**
 * 7 kyu - Area of a Circle
 * https://www.codewars.com/kata/537baa6f8f4b300b5900106c
 */
const circleArea = (r) => (r > 0 ? +(r * r * Math.PI).toFixed(2) : false);
