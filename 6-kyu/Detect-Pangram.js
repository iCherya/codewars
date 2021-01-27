/**
 * 6 kyu - Detect Pangram
 * https://www.codewars.com/kata/545cedaa9943f7fe7b000048
 */
const isPangram = (string) => {
    const arr = string.replace(/ /g, '').split('');
    const set = new Set(arr);

    return set.size > 25;
};
