/**
 * 7 kyu - STRONGN Strong Number (Special Numbers Series #2)
 * https://www.codewars.com/kata/5a4d303f880385399b000001
 */
const strong = (n) => {
    let sum = 0;
    const factorial = (n) => (n > 0 ? n * factorial(n - 1) : 1);

    for (const digit of n.toString()) {
        sum += factorial(+digit);
    }

    return sum === n ? 'STRONG!!!!' : 'Not Strong !!';
};
