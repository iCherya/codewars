/**
 * 7 kyu - Isograms
 * https://www.codewars.com/kata/54ba84be607a92aa900000f1
 */
const isIsogram = (str) => {
    const set = new Set(str.split('').map((el) => el.toLowerCase()));

    return set.size === str.length;
};
