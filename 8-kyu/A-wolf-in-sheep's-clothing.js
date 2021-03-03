/**
 * 8 kyu - A wolf in sheep's clothing
 * https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
 */
const warnTheSheep = (queue) => {
    const idx = queue.reverse().indexOf('wolf');

    return idx === 0
        ? 'Pls go away and stop eating my sheep'
        : `Oi! Sheep number ${idx}! You are about to be eaten by a wolf!`;
};
