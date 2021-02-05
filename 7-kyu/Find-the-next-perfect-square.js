/**
 * 7 kyu - Find the next perfect square!
 * https://www.codewars.com/kata/56269eb78ad2e4ced1000013
 */
const findNextSquare = (sq) => {
    const sqrt = Math.sqrt(sq);

    return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
};
