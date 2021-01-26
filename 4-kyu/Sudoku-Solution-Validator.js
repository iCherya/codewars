/**
 * 4 kyu - Sudoku Solution Validator
 * https://www.codewars.com/kata/529bf0e9bdf7657179000008
 */
const validSolution = (data) => {
    const n = data.length;
    const dimention = Math.sqrt(n);

    if (!Number.isInteger(dimention)) return false;

    for (let item of data) {
        if (item.length !== n) return false;
        for (let value of item) {
            if (typeof value !== 'number') return false;
        }
    }

    const sum = (n * (n + 1)) / 2;
    const calcSum = (array) => array.reduce((acc, cur) => acc + cur, 0);

    const rows = [...data];

    const cols = [];
    for (let i = 0; i < data.length; i++) {
        const col = [];

        for (let j = 0; j < data.length; j++) {
            col.push(data[j][i]);
        }

        cols.push(col);
    }

    const blocks = [];
    for (let r = 0; r < dimention; r++) {
        for (let c = 0; c < dimention; c++) {
            const block = [];

            for (let i = 0; i < dimention; i++) {
                for (let j = 0; j < dimention; j++) {
                    block.push(data[dimention * r + i][dimention * c + j]);
                }
            }
            blocks.push(block);
        }
    }

    const arr = [rows, cols, blocks];

    for (const item of arr) {
        for (const elem of item) {
            if (calcSum(elem) !== sum) return false;
        }
    }

    return true;
};
