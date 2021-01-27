/**
 * 5 kyu - Number of trailing zeros of N!
 * https://www.codewars.com/kata/52f787eb172a8b4ae1000a34
 */
const zeros = (n) => {
    let counter = 0;

    while (n >= 5) {
        counter += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }

    return counter;
};
