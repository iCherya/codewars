/**
 * 5 kyu - String incrementer
 * https://www.codewars.com/kata/54a91a4883a7de5d7800009c
 */
const incrementString = (s) => {
    const [text, number] = s.split(/([0-9]+)/);
    if (!number) return text + 1;

    const nLen = number.length;
    const numberNew = +number + 1;
    const nLenNew = numberNew.toString().length;

    if (nLenNew - 1 !== nLen) {
        return text + numberNew.toString().padStart(nLen, '0');
    }

    return text + numberNew;
};
