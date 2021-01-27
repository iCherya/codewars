/**
 * 4 kyu - Roman Numerals Helper
 * https://www.codewars.com/kata/51b66044bce5799a7f000003
 */
const RomanNumerals = {
    fromRoman: (s) => {
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
    },
    toRoman: (num) => {
        const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        let res = '';

        while (num > 0) {
            for (let i = 0; i < romans.length; i++) {
                if (num >= numbers[i]) {
                    num -= numbers[i];
                    res += romans[i];
                    break;
                }
            }
        }

        return res;
    }
};
