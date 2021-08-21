/**
 * 7 kyu - Last
 * https://www.codewars.com/kata/541629460b198da04e000bb9
 */
const last = (...list) => {
    if (Array.isArray(list[0]) || (typeof list[0] === 'string' && list[0].length > 1)) {
        return list[0][list[0].length - 1];
    }

    return list[list.length - 1];
};
