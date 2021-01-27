/**
 * 6 kyu - Valid Braces
 * https://www.codewars.com/kata/5277c8a221e209d3f6000b56
 */
const validBraces = (s) => {
    if (s.length === 0) return true;

    const relates = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    const stack = [];
    stack.push(s[0]);

    for (let i = 1; i < s.length; i++) {
        const currChar = s[i];
        const lastInStack = stack[stack.length - 1];

        if (relates[lastInStack] === currChar) {
            stack.pop();
        } else {
            stack.push(currChar);
        }
    }

    return stack.length === 0;
};
