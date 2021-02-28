/**
 * 8 kuy - How good are you really?
 * https://www.codewars.com/kata/5601409514fc93442500010b
 */
const betterThanAverage = (classPoints, yourPoints) =>
    classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length < yourPoints;
