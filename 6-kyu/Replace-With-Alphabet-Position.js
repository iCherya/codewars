/**
 * 6 kyu - Replace With Alphabet Position
 * https://www.codewars.com/kata/546f922b54af40e1e90001da
 */
const alphabetPosition = (text) => {
    let result = [];

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();
        const num = char.charCodeAt(0);
        if (num < 97 || num > 122) continue;

        result.push(num - 96);
    }

    return result.join(' ');
};
