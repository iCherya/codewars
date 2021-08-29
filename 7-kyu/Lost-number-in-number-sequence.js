/**
 * 7 kyu - Lost number in number sequence
 * https://www.codewars.com/kata/595aa94353e43a8746000120
 */
const findDeletedNumber = (arr, mixArr) => {
    mixArr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== mixArr[i]) return arr[i];
    }

    return 0;
};
