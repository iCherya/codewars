/* eslint-disable guard-for-in */
/**
 * 8 kyu - Training JS #12: loop statement --for..in and for..of
 * https://www.codewars.com/kata/5722b3f0bd5583cf44001000
 */
const giveMeFive = (obj) => {
    const result = [];

    for (const key in obj) {
        if (key.length === 5) result.push(key);
        if (obj[key].length === 5) result.push(obj[key]);
    }

    return result;
};
