/**
 * 7 kyu - Double Trouble
 * https://www.codewars.com/kata/57f7796697d62fc93d0001b8
 */
const trouble = (arr, t) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i + 1] === t) {
            arr.splice(i + 1, 1);
            i--;
        }
    }

    return arr;
};
