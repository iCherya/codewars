/**
 * 8 kyu - Heads and Legs
 * https://www.codewars.com/kata/574c5075d27783851800169e
 */
const animals = (heads, legs) => {
    if (heads === 0 && legs === 0) return [0, 0];

    const cows = (legs - heads * 2) / 2;
    const chickens = heads - cows;

    if (chickens >= 0 && Number.isInteger(chickens) && cows >= 0 && Number.isInteger(cows)) {
        return [chickens, cows];
    }

    return 'No solutions';
};
