/**
 * 7 kyu - Is this a triangle?
 * https://www.codewars.com/kata/56606694ec01347ce800001b
 */
const isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;
