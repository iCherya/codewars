/**
 * 6 kyu - Length of the longest sequence of consecutive integers
 * https://www.codewars.com/kata/58595b6f5a8a0713e6000eed
 */
const maxConsecutiveSequenceLength = (array) => {
    if (!array.length) return 0;

    let maxLength = 0;

    for (let i = array.length; i >= 0; i--) {
        let currentLength = 1;
        let currentItem = array[i];

        for (let j = i - 1; j >= 0; j--) {
            const nextItem = array[j];

            if (nextItem === currentItem || nextItem === currentItem - 1) {
                currentLength += 1;
                currentItem = nextItem;
            }
        }

        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
};
