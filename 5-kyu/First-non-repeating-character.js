/**
 * 5 kyu - First non-repeating character
 * https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
 */
const firstNonRepeatingLetter = (str) => {
    const visited = {};
    const s = str.toLowerCase();

    for (let i = 0; i < s.length; i++) {
        if (!visited[s[i]]) visited[s[i]] = 0;
        visited[s[i]]++;

        if (s.lastIndexOf(s[i]) === i && visited[s[i]] < 2) return str[i];
    }

    return '';
};
