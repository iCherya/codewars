/**
 * 7 kyu - Maximum Multiple
 * https://www.codewars.com/kata/5aba780a6a176b029800041c
 */
const maxMultiple = (divisor, bound) => {
    while (bound > 0) {
        if (bound % divisor === 0) {
            return bound;
        }

        bound -= 1;
    }
};
