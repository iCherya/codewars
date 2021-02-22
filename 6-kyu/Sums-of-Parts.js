/**
 * 6 kyu - Sums of Parts
 * https://www.codewars.com/kata/5ce399e0047a45001c853c2b
 */
const partsSums = (ls) => {
    ls = ls.reverse();

    const result = [0];
    let sum = 0;

    for (let i = 0; i < ls.length; i++) {
        sum += ls[i];

        result.push(sum);
    }

    return result.reverse();
};
