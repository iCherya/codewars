/**
 * 5 kyu - Weight for weight
 * https://www.codewars.com/kata/55c6126177c9441a570000cc
 */
const orderWeight = (string) => {
    const result = string.split(' ');

    result.sort((a, b) => {
        const getWeight = (str) =>
            str
                .split('')
                .map(Number)
                .reduce((acc, curr) => acc + curr, 0);

        const aW = getWeight(a);
        const bW = getWeight(b);

        if (aW === bW) {
            return a < b ? -1 : 1;
        }

        return aW - bW;
    });

    return result.join(' ');
};
