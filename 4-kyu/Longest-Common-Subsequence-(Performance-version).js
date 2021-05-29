/**
 * 4 kyu - Longest Common Subsequence (Performance version)
 * https://www.codewars.com/kata/593ff8b39e1cc4bae9000070
 */
const lcs = (text1, text2) => {
    const arr = [];
    for (let i = 0; i < text1.length + 1; i += 1) {
        const subArr = [];

        for (let j = 0; j < text2.length + 1; j += 1) {
            subArr.push([]);
        }

        arr.push(subArr);
    }

    for (let i = 1; i < arr.length; i += 1) {
        for (let j = 1; j < arr[0].length; j += 1) {
            if (text1[i - 1] === text2[j - 1]) {
                arr[i][j] = [...arr[i - 1][j - 1], text1[i - 1]];
            } else if (arr[i - 1][j].length > arr[i][j - 1].length) {
                arr[i][j] = arr[i - 1][j];
            } else {
                arr[i][j] = arr[i][j - 1];
            }
        }
    }

    return arr[text1.length][text2.length].join('');
};
