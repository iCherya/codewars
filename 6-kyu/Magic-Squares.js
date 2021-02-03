/**
 * 6 kyu - Magic Squares
 * https://www.codewars.com/kata/58c979aafd407d6e9f000071
 */
const magicSquare = (arr) => {
    if (arr.length === 0) return false;

    for (const subArr of arr) {
        if (!subArr) return false;
    }

    const getSum = (array) => array.reduce((acc, curr) => acc + curr, 0);
    const getColums = (array) => {
        const columns = [];

        for (let i = 0; i < array.length; i++) {
            const column = [];

            for (let j = 0; j < array.length; j++) {
                column.push(array[j][i]);
            }

            columns.push(column);
        }

        return columns;
    };
    const getDiagonals = (array) => {
        const d1 = [];
        const d2 = [];

        for (let i = 0; i < array.length; i++) {
            d1.push(array[i][i]);
            d2.push(array[i][array.length - i - 1]);
        }

        return [d1, d2];
    };

    const magicSum = getSum(arr[0]);
    const candidates = [...arr, ...getColums(arr), ...getDiagonals(arr)];

    for (const candidate of candidates) {
        if (getSum(candidate) !== magicSum) return false;
    }

    return true;
};
