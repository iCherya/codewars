/**
 * 6 kyu - Rectangle into Squares
 * https://www.codewars.com/kata/55466989aeecab5aac00003e
 */
const sqInRect = (l, w) => {
    const sort = (arr) => arr.sort((a, b) => a - b);
    if (l === w) return null;

    let [short, long] = sort([l, w]);

    const result = [];
    while (short !== long) {
        result.push(short);

        long -= short;
        [short, long] = sort([short, long]);
    }
    result.push(short);

    return result;
};
