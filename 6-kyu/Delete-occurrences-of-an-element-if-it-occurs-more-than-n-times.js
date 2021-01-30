/**
 * 6 kyu - Delete occurrences of an element if it occurs more than n times
 * https://www.codewars.com/kata/554ca54ffa7d91b236000023
 */
const deleteNth = (arr, n) => {
    const map = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        if (!map[num]) map[num] = 0;
        map[num]++;

        if (map[num] > n) {
            arr.splice(i, 1);
            i--;
        }
    }

    return arr;
};
