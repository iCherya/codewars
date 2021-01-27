/**
 * 6 kyu - Multiples of 3 or 5
 * https://www.codewars.com/kata/514b92a657cdc65150000006
 */
const solution = (number) => {
    let result = 0;
    if (number < 0) return result;

    number--;
    while (number > 0) {
        if (number % 3 === 0 || number % 5 === 0) {
            result += number;
        }

        number--;
    }

    return result;
};
