/**
 * 7 kyu - My Languages
 * https://www.codewars.com/kata/5b16490986b6d336c900007d
 */
const myLanguages = (results) => {
    return Object.entries(results)
        .filter((el) => el[1] >= 60)
        .sort((a, b) => b[1] - a[1])
        .map((el) => el[0]);
};
