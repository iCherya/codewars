/**
 * Beta - All Star Code Challenge #2
 * https://www.codewars.com/kata/5864001db3a675d9a7000091
 */
const findAverage = (allStars) => allStars.reduce((acc, curr) => acc + curr, 0) / allStars.length;
