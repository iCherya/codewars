/**
 * 6 kyu - Title Case
 * https://www.codewars.com/kata/5202ef17a402dd033c000009
 */
const titleCase = (title, minorWords) => {
    if (!title) return title;

    const titleArr = title.split(' ').map((el) => el.toLowerCase());
    const minorWordsArr = minorWords ? minorWords.split(' ').map((el) => el.toLowerCase()) : [];
    const result = [];

    for (let i = 0; i < titleArr.length; i++) {
        const word = titleArr[i];

        let newWord = word[0].toUpperCase() + word.slice(1);

        if (minorWordsArr.includes(word) && i !== 0) {
            newWord = newWord.toLowerCase();
        }

        result.push(newWord);
    }

    return result.join(' ');
};
