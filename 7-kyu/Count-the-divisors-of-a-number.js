/**
 * 7 kyu - Count the divisors of a number
 * https://www.codewars.com/kata/542c0f198e077084c0000c2e
 */
const getDivisorsCnt = (n) => {
    let counter = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) counter++;
    }

    return counter;
};
