/**
 * 7 kyu - Letterbox Paint-Squad
 * https://www.codewars.com/kata/597d75744f4190857a00008d
 */
const paintLetterboxes = (start, end) => {
    const map = {};
    for (let i = 0; i < 10; i++) {
        map[i] = 0;
    }

    for (let i = start; i <= end; i++) {
        i.toString()
            .split('')
            .forEach((el) => {
                map[el]++;
            });
    }

    return Object.values(map);
};
