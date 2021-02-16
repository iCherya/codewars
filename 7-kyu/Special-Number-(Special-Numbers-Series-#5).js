/**
 * 7 kyu - Special Number (Special Numbers Series #5)
 * https://www.codewars.com/kata/5a55f04be6be383a50000187
 */
const specialNumber = (n) => {
    const specialNumsArr = [0, 1, 2, 3, 4, 5];
    const numsArr = n.toString().split('').map(Number);

    for (const number of numsArr) {
        if (!specialNumsArr.includes(number)) return 'NOT!!';
    }

    return 'Special!!';
};
