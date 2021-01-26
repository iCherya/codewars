/**
 * 4 kyu - Permutations
 * https://www.codewars.com/kata/5254ca2719453dcc0b00027d
 */
const permutations = (string) => {
    const permArr = [];
    const usedChars = [];

    const permute = (str) => {
        const chars = str.split('');

        for (let i = 0; i < chars.length; i++) {
            const ch = chars.splice(i, 1);
            usedChars.push(ch);

            if (chars.length == 0) permArr[permArr.length] = usedChars.join('');

            permute(chars.join(''));
            chars.splice(i, 0, ch);
            usedChars.pop();
        }

        return permArr;
    };

    return Array.from(new Set(permute(string)));
};
