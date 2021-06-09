/**
 * 8 kyu - easy logs
 * https://www.codewars.com/kata/5b68c7029756802aa2000176
 */
const logs = (x, a, b) => {
    const logBase = (val, base) => Math.log(val) / Math.log(base);
    return logBase(a, x) + logBase(b, x);
};
