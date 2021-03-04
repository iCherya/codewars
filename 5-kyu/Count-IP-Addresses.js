/**
 * 5 kyu - Count IP Addresses
 * https://www.codewars.com/kata/526989a41034285187000de4
 */
const ipsBetween = (start, end) => {
    const count = (ip) => ip.split('.').map(Number);
    const [startArr, endArr] = [count(start), count(end)];

    let result = 0;
    for (let i = 0; i < startArr.length; i += 1) {
        result += (endArr[i] - startArr[i]) * 256 ** (3 - i);
    }

    return result;
};
