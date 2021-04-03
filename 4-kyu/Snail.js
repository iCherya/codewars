/**
 * 4 kyu - Snail
 * https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
 */
const snail = (array) => {
    if (array.length === 1) return array[0];

    const travel = [];
    let rightBoundary = array.length - 1;
    let leftBoundary = 0;
    let upperBoundary = 0;
    let lowerBoundary = array.length - 1;

    for (let i = upperBoundary; i <= lowerBoundary; i++) {
        for (let j = leftBoundary; j <= rightBoundary; j++) {
            travel.push(array[i][j]);
        }

        for (let k = i + 1; k < lowerBoundary; k++) {
            travel.push(array[k][rightBoundary]);
        }

        for (let l = rightBoundary; l >= leftBoundary; l--) {
            if (lowerBoundary !== upperBoundary) {
                travel.push(array[lowerBoundary][l]);
            }
        }

        for (let m = lowerBoundary - 1; m > upperBoundary; m--) {
            travel.push(array[m][leftBoundary]);
        }

        lowerBoundary -= 1;
        leftBoundary += 1;
        rightBoundary -= 1;
        upperBoundary += 1;
    }

    return travel;
};
