/**
 * 8 kyu - Do something "n.times" (Simplifying "for" loops)
 * https://www.codewars.com/kata/56e6a330715e7221d9000a3b
 */
Number.prototype.times = function (f) {
    let counter = 0;
    while (counter < this) {
        f(counter);
        counter += 1;
    }
};
