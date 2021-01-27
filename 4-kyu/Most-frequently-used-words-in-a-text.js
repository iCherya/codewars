/**
 * 4 kyu - Most frequently used words in a text
 * https://www.codewars.com/kata/51e056fe544cf36c410000fb
 */
const topThreeWords = (text) => {
    if (text.trim() === "'") return [];

    const reg = new RegExp(/[\w'-]+/g);
    const match = text.match(reg);

    if (!match) return [];

    const map = {};

    for (let word of match) {
        word = word.toLowerCase();

        if (!map[word]) {
            map[word] = 0;
        }

        map[word]++;
    }

    return Object.entries(map)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map((el) => el[0]);
};
