/**
 * 8 kyu - Total amount of points
 * https://www.codewars.com/kata/5bb904724c47249b10000131
 */
const points = (games) => {
    let total = 0;

    for (const game of games) {
        const [x, y] = game.split(':').map(Number);

        if (x > y) total += 3;
        if (x === y) total += 1;
    }

    return total;
};
