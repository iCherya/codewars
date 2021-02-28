/**
 * 8 kyu - If you can't sleep, just count sheep!!
 * https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
 */
const countSheep = (num) => {
    let result = '';

    let i = 1;
    while (i <= num) {
        result += `${i} sheep...`;
        i++;
    }

    return result;
};
