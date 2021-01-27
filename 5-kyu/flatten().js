/**
 * 5 kyu - flatten()
 * https://www.codewars.com/kata/513fa1d75e4297ba38000003
 */
const flatten = (...arg) =>
    arg.reduce((acc, curr) => {
        return acc.concat(Array.isArray(curr) ? flatten(...curr) : curr);
    }, []);
