/**
 * 8 kyu - Implement Array.prototype.filter()
 * https://www.codewars.com/kata/56dd9b84fe5754786f0014f7
 */
Array.prototype.filter = function (func) {
    const result = [];

    for (const item of this) {
        if (func(item)) result.push(item);
    }

    return result;
};
