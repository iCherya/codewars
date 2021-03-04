/**
 * 6 kyu - Equal Sides Of An Array
 * https://www.codewars.com/kata/5679aa472b8f57fb8c000047
 */
const findEvenIndex = (array) => {
    const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

    for (let i = 0; i < array.length; i += 1) {
        const left = array.slice(0, i);
        const right = array.slice(i + 1);

        if (sum(left) === sum(right)) return i;
    }

    return -1;
};
