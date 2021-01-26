/**
 * 5 kyu - Moving Zeros To The End
 * https://www.codewars.com/kata/52597aa56021e91c93000cb0
 */
const moveZeros = (arr) => {
    const res = arr.filter((el) => el !== 0);

    while (res.length < arr.length) {
        res.push(0);
    }

    return res;
};
