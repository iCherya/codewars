/**
 * 6 kyu - All Star Code Challenge #15
 * https://www.codewars.com/kata/586560a639c5ab3a260000f3
 */
const rotate = (str) => {
    const result = [];

    for (let i = 0; i < str.length; i++) {
        const firstChar = str[0];
        const newStr = str.slice(1) + firstChar;

        result.push(newStr);
        str = newStr;
    }

    return result;
};
