/**
 * 6 kyu - Consecutive Count
 * https://www.codewars.com/kata/59c3e819d751df54e9000098
 */
const getConsectiveItems = (items, key) => {
    items = items.toString();
    key = key.toString();

    let counter = 0;
    let max = 0;
    for (let i = 0; i < items.length; i++) {
        const char = items[i];
        if (char === key) counter++;
        else counter = 0;

        max = Math.max(max, counter);
    }

    return max;
};
