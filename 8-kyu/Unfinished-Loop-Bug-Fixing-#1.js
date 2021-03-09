/**
 * 8 kyu - Unfinished Loop - Bug Fixing #1
 * https://www.codewars.com/kata/55c28f7304e3eaebef0000da
 */
const createArray = (number) => {
    const newArray = [];

    for (let counter = 1; counter <= number; counter += 1) {
        newArray.push(counter);
    }

    return newArray;
};
