/**
 * 7 kyu - Coding 3min : A*B=C
 * https://www.codewars.com/kata/5714803d2817ffce17000a35
 */
const findAB = (numbers, c) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const a = numbers[i];
            const b = numbers[j];

            if (a * b === c) {
                return [a, b];
            }
        }
    }

    return null;
};
