/**
 * 6 kyu - Find the missing letter
 * https://www.codewars.com/kata/5839edaa6754d6fec10000a2
 */
const findMissingLetter = (array) => {
    let firstCharCode = array[0].charCodeAt(0);

    for (let i = 1; i < array.length; i++) {
        const missingCandidate = String.fromCharCode(firstCharCode + 1);

        if (missingCandidate !== array[i]) {
            return missingCandidate;
        }

        firstCharCode++;
    }
};
