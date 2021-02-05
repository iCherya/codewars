/**
 * 7 kyu - Two to One
 * https://www.codewars.com/kata/5656b6906de340bd1b0000ac
 */
const longest = (s1, s2) => {
    const merged = s1 + s2;
    const set = new Set(merged.split(''));
    const result = Array.from(set);

    return result.sort().join('');
};
