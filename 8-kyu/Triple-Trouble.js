/**
 * 8 kyu - Triple Trouble
 * https://www.codewars.com/kata/5704aea738428f4d30000914
 */
const tripleTrouble = (one, two, three) => {
    let result = '';
    const len = one.length;

    for (let i = 0; i < len; i++) {
        result += one[i] + two[i] + three[i];
    }

    return result;
};
