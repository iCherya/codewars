/**
 * 7 kyu - Thinking & Testing : Incomplete string
 * https://www.codewars.com/kata/56d9292cc11bcc3629000533
 */
const testit = (s) => {
    let codes = s.split('').map((el) => el.charCodeAt(0));
    const len = codes.length;

    codes = codes.reduce((acc, curr, idx) => {
        if (idx % 2 === 0) {
            if (idx < len - 1) {
                return acc.concat(Math.floor((curr + codes[idx + 1]) / 2));
            } else {
                return acc.concat(curr);
            }
        } else {
            return acc;
        }
    }, []);

    return codes.map((el) => String.fromCharCode(el)).join('');
};
