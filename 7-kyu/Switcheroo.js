/**
 * 7 kyu - Switcheroo
 * https://www.codewars.com/kata/57f759bb664021a30300007d
 */
const switcheroo = (x) => {
    let result = '';

    for (const char of x) {
        if (char === 'a') result += 'b';
        else if (char === 'b') result += 'a';
        else result += char;
    }

    return result;
};
