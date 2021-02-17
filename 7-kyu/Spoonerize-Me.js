/**
 * 7 kyu - Spoonerize Me
 * https://www.codewars.com/kata/56b8903933dbe5831e000c76
 */
const spoonerize = (words) => {
    const [first, second] = words.split(' ');

    return second[0] + first.slice(1) + ' ' + first[0] + second.slice(1);
};
