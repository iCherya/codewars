/**
 * 6 kyu - WeIrD StRiNg CaSe
 * https://www.codewars.com/kata/52b757663a95b11b3d00062d
 */
const toWeirdCase = (str) => {
    let result = [];
    let arr = str.split(' ');

    for (const string of arr) {
        const word = [];

        for (let i = 0; i < string.length; i++) {
            let char = string[i];

            if (i % 2 === 0) {
                word.push(char.toUpperCase());
            } else {
                word.push(char);
            }
        }

        result.push(word.join(''));
    }

    return result.join(' ');
};
