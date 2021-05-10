/**
 * 8 kyu - Multiplication table for number
 * https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
 */
const multiTable = (number) => {
    const result = [];

    for (let i = 1; i <= 10; i++) {
        const line = `${i} * ${number} = ${number * i}`;
        result.push(line);
    }

    return result.join('\n');
};
