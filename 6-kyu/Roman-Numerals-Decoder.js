/**
 * 6 kyu - Roman Numerals Decoder
 * https://www.codewars.com/kata/51b6249c4612257ac0000005
 */
const solution = (s) => {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        const next = s[i + 1];

        if (values[curr] < values[next]) {
            result += values[next] - values[curr];
            i++;
        } else {
            result += values[curr];
        }
    }

    return result;
};
