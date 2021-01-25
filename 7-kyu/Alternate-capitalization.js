/**
 * 7 kyu - Alternate capitalization
 * https://www.codewars.com/kata/59cfc000aeb2844d16000075
 */
const capitalize = (s) => {
    let case1 = '';
    let case2 = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (i % 2 === 0) {
            case1 += char.toUpperCase();
            case2 += char;
        } else {
            case1 += char;
            case2 += char.toUpperCase();
        }
    }

    return [case1, case2];
};
