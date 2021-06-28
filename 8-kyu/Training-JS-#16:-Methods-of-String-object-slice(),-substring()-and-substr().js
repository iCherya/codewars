/**
 * 8 kyu - Training JS #16: Methods of String object--slice(), substring() and substr()
 * https://www.codewars.com/kata/57274562c8dcebe77e001012
 */
const cutIt = (arr) => {
    const min = Math.min(...arr.map((el) => el.length));
    return arr.map((el) => el.slice(0, min));
};
