/**
 * 6 kyu - Bouncing Balls
 * https://www.codewars.com/kata/5544c7a5cb454edb3c000047
 */
const bouncingBall = (h, bounce, window) => {
    let counter = 0;
    if (bounce < 0 || bounce >= 1 || h < window) return -1;

    while (h > window) {
        h *= bounce;
        counter++;
    }

    return counter * 2 - 1;
};
