/**
 * 8 kyu - Find out whether the shape is a cube
 * https://www.codewars.com/kata/58d248c7012397a81800005c
 */
const cubeChecker = (volume, side) => side > 0 && side ** 3 === volume;
