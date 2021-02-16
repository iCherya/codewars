/**
 * 6 kyu - Backspaces in string
 * https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
 */
const cleanString = (s) => {
    const stack = [];

    for (const char of s) {
        if (char === '#') stack.pop();
        else stack.push(char);
    }

    return stack.join('');
};
