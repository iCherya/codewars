/**
 * 6 kyu - Multiplication table
 * https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08
 */
const multiplicationTable = (size) => {
    const result = [];

    for (let i = 1; i <= size; i += 1) {
        const level = [];

        for (let j = 1; j <= size; j += 1) {
            level.push(i * j);
        }

        result.push(level);
    }

    return result;
};
