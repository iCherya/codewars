/**
 * 8 kyu - Count the Monkeys!
 * https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
 */
const monkeyCount = (n) => {
    const result = [];

    for (let i = 1; i <= n; i++) {
        result.push(i);
    }

    return result;
};
