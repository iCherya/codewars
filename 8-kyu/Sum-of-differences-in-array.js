/**
 * 8 kyu - Sum of differences in array
 * https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
 */
const sumOfDifferences = (arr) => {
    arr.sort((a, b) => b - a);

    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        const curr = arr[i];
        const next = arr[i + 1];

        sum += curr - next;
    }

    return sum;
};
