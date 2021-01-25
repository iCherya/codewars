/**
 * 7 kyu - Genetic Algorithm Series - #1 Generate
 * https://www.codewars.com/kata/567d609f1c16d7369c000008
 */
const generate = (length) => {
    let result = '';

    while (result.length < length) {
        result += Math.round(Math.random());
    }

    return result;
};
