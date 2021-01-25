/**
 * 6 kyu - Duplicate Encoder
 * https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
 */
const duplicateEncode = (word) => {
    word = word.toLowerCase();
    const map = {};

    for (const char of word) {
        if (!map[char]) {
            map[char] = 0;
        }
        map[char]++;
    }

    let result = '';

    for (let char of word) {
        if (map[char] === 1) {
            result += '(';
        } else {
            result += ')';
        }
    }

    return result;
};

console.log(duplicateEncode('din'), '(((');
console.log(duplicateEncode('recede'), '()()()');
console.log(duplicateEncode('Success'), ')())())', 'should ignore case');
console.log(duplicateEncode('(( @'), '))((');
