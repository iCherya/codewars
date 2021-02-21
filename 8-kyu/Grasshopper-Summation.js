/**
 * 8 kyu - Grasshopper - Summation
 * https://www.codewars.com/kata/55d24f55d7dd296eb9000030
 */
const summation = (num) => {
    let sum = 0;

    let i = 0;
    while (i <= num) {
        sum += i;
        i++;
    }

    return sum;
};
