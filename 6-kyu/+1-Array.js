/**
 * 6 kyu - +1 Array
 * https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9
 */
const upArray = (arr) => {
    if (arr.filter((el) => el >= 0 && el < 10).length !== arr.length || arr.length === 0)
        return null;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 9) {
            arr[i] = 0;
            if (i === 0) arr.unshift(1);
        } else {
            arr[i] += 1;
            return arr;
        }
    }

    return arr;
};
