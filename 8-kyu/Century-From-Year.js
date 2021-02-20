/**
 * 8 kyu - Century From Year
 * https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
 */
const century = (year) => {
    const c = Math.floor(year / 100);
    const y = year % 100;

    return y > 0 ? c + 1 : c;
};
