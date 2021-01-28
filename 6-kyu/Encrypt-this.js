/**
 * 6 kyu - Encrypt this!
 * https://www.codewars.com/kata/5848565e273af816fb000449
 */

const encryptThis = (text) => {
    const textArr = text.split(' ');
    const result = [];

    for (let word of textArr) {
        let newWord = '';

        newWord += word.charCodeAt(0);
        if (word.length < 2) {
            result.push(newWord);
            continue;
        }

        newWord += word[word.length - 1];
        if (word.length < 3) {
            result.push(newWord);
            continue;
        }

        newWord += word.slice(2, -1);
        newWord += word[1];
        result.push(newWord);
    }

    return result.join(' ');
};
