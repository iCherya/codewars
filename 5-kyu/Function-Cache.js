/**
 * 5 kyu - Function Cache
 * https://www.codewars.com/kata/525481903700c1a1ff0000e1
 */
function cache(func) {
    const memo = {};

    return function check(...arg) {
        let key = JSON.stringify(arg);

        if (key in memo) {
            return memo[key];
        } else {
            memo[key] = func(...arg);

            return memo[key];
        }
    };
}
