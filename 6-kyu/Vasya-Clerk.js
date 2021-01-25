/**
 * 6 kyu - Vasya - Clerk
 * https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8
 */
const tickets = (peopleInLine) => {
    let cash25 = 0,
        cash50 = 0;

    for (let i = 0; i < peopleInLine.length; i++) {
        const paid = peopleInLine[i];

        if (paid === 25) {
            cash25++;
        }

        if (paid === 50) {
            cash50++;
            cash25--;
        }

        if (paid === 100) {
            if (cash50 === 0 && cash25 >= 3) {
                cash25 -= 3;
            } else {
                cash25--;
                cash50--;
            }
        }

        if (cash25 < 0 || cash50 < 0) {
            return 'NO';
        }
    }

    return 'YES';
};
