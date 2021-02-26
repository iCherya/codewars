/**
 * 8 kyu - Sum without highest and lowest number
 * https://www.codewars.com/kata/576b93db1129fcf2200001e6
 */
const sumArray = (array) => {
    if (!array || array.length <= 2) return 0;

    const min = Math.min(...array);
    const max = Math.max(...array);

    return array.reduce((a, c) => a + c, 0) - min - max;
};
