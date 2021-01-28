/**
 * 7 kyu - Beginner Series #3 Sum of Numbers
 * https://www.codewars.com/kata/55f2b110f61eb01779000053
 */
const getSum = (a, b) => {
    if (a > b) [a, b] = [b, a];

    let sum = 0;
    while (a <= b) {
        sum += a;
        a++;
    }

    return sum;
};
