/**
 * 6 kyu - Persistent Bugger.
 * https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
 */
const persistence = (num) => {
    let counter = 0;

    while (Math.floor(num / 10) > 0) {
        num = num
            .toString()
            .split('')
            .map(Number)
            .reduce((acc, curr) => acc * curr, 1);

        counter++;
    }

    return counter;
};
