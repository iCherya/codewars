/**
 * 6 kyu - Mexican Wave
 * https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
 */
const wave = (str) => {
    const result = [];

    for (let i = 0; i < str.length; i += 1) {
        if (str[i] !== ' ') {
            const s = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
            result.push(s);
        }
    }

    return result;
};
