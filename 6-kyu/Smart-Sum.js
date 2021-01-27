/**
 * 6 kyu - Smart Sum
 * https://www.codewars.com/kata/5831200eb812b8016d000094
 */
const smartSum = (...arg) =>
    arg.reduce((sum, el) => sum + (Array.isArray(el) ? smartSum(...el) : el), 0);
