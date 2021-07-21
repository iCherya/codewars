/**
 * 8 kyu - Improving Math.round(x)
 * https://www.codewars.com/kata/56be025f9347a066c7000e4f
 */
Math.roundTo = function (number, precision) {
    return Math.round(number * 10 ** precision) / 10 ** precision;
};
