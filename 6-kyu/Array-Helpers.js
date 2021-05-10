/**
 * 6 kyu - Array Helpers
 * https://www.codewars.com/kata/525d50d2037b7acd6e000534
 */
Array.prototype.square = function () {
    return this.map((el) => el ** 2);
};

Array.prototype.cube = function () {
    return this.map((el) => el ** 3);
};

Array.prototype.sum = function () {
    return this.reduce((acc, curr) => acc + curr, 0);
};

Array.prototype.average = function () {
    if (this.length === 0) return NaN;

    return this.sum() / this.length;
};

Array.prototype.even = function () {
    return this.filter((el) => el % 2 === 0);
};

Array.prototype.odd = function () {
    return this.filter((el) => el % 2 !== 0);
};
