/**
 * 5 kyu - Calculating with Functions
 * https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
 */
function process(number, fn) {
    return fn ? fn.call(fn, number) : number;
}

function zero(fn) {
    return process(0, fn);
}
function one(fn) {
    return process(1, fn);
}
function two(fn) {
    return process(2, fn);
}
function three(fn) {
    return process(3, fn);
}
function four(fn) {
    return process(4, fn);
}
function five(fn) {
    return process(5, fn);
}
function six(fn) {
    return process(6, fn);
}
function seven(fn) {
    return process(7, fn);
}
function eight(fn) {
    return process(8, fn);
}
function nine(fn) {
    return process(9, fn);
}

function plus(num) {
    return function (res) {
        return res + num;
    };
}
function minus(num) {
    return function (res) {
        return res - num;
    };
}
function times(num) {
    return function (res) {
        return res * num;
    };
}
function dividedBy(num) {
    return function (res) {
        return Math.floor(res / num);
    };
}
