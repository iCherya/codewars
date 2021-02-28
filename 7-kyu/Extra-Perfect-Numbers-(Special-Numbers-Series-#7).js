/**
 * 7 kyu - Extra Perfect Numbers (Special Numbers Series #7)
 * https://www.codewars.com/kata/5a662a02e626c54e87000123
 */
const extraPerfect = (n) => {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) result.push(i);
    }

    return result;
};
