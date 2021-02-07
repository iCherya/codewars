/**
 * 7 kyu - Life Path Number
 * https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0
 */
const lifePathNumber = (dateOfBirth) => {
    const sumDigits = (num) => {
        while (num > 9) {
            num = num
                .toString()
                .split('')
                .map(Number)
                .reduce((acc, curr) => acc + curr, 0);
        }

        return num;
    };

    const arr = dateOfBirth.split('-').map(Number);
    let lifenum = 0;

    arr.forEach((el) => {
        lifenum += sumDigits(el);
    });

    return sumDigits(lifenum);
};
