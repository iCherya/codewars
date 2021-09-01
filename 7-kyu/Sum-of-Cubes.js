/**
 * 7 kyu - Sum of Cubes
 * https://www.codewars.com/kata/59a8570b570190d313000037
 */
const sumCubes = (n) =>
    new Array(n + 1)
        .fill(null)
        .map((_, idx) => idx)
        .reduce((acc, curr) => acc + curr ** 3, 0);
