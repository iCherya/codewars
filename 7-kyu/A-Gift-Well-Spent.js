/**
 * 7 kyu - A Gift Well Spent
 * https://www.codewars.com/kata/54554846126a002d5b000854
 */
const buy = (x, arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === x) {
                return [i, j];
            }
        }
    }

    return null;
};
