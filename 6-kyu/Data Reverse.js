/**
 * 6 kyu - Data Reverse
 * https://www.codewars.com/kata/569d488d61b812a0f7000015
 */
const dataReverse = (data) => {
    const bytes = [];

    for (let i = 0; i < data.length; i += 8) {
        const byte = data.slice(i, i + 8);
        bytes.push(byte);
    }

    return [].concat(...bytes.reverse());
};
