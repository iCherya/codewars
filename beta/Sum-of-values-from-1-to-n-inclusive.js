/**
 * Beta - Sum of values from 1 to n inclusive { nΣn=1 }
 * https://www.codewars.com/kata/578a55517c77f535a8000064
 */
const total = (num) => {
    let sum = 0;

    for (let n = 1; n <= num; n++) {
        sum += n;
    }

    return sum;
};
