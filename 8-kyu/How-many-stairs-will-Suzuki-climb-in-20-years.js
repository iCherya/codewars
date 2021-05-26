/**
 * 8 kyu - How many stairs will Suzuki climb in 20 years?
 * https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e
 */
const stairsIn20 = (weekend) =>
    weekend.reduce((acc, curr) => acc + curr.reduce((a, c) => a + c, 0), 0) * 20;
