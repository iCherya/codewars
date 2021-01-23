/**
 * 7 kyu - Thinking & Testing : True or False
 * https://www.codewars.com/kata/56d931ecc443d475d5000003
 */
function testit(n) {
    const binary = n.toString(2);

    return binary
        .split('')
        .map(Number)
        .reduce((acc, curr) => acc + curr, 0);
}
