/**
 * 5 kyu - Simple Pig Latin
 * https://www.codewars.com/kata/520b9d2ad5c005041100000f
 */
const pigIt = (str) => {
    const result = [];
    const regexp = /[a-zA-Z]/;

    for (const word of str.split(' ')) {
        if (regexp.test(word)) {
            const first = word[0];
            let newWord = word.slice(1) + first + 'ay';
            result.push(newWord);
        } else {
            result.push(word);
        }
    }

    return result.join(' ');
};
