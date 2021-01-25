/**
 * 7 kyu - Find the divisors!
 * https://www.codewars.com/kata/544aed4c4a30184e960010f4
 */
const divisors = (num) => {
    const divisorsArr = [];

    let i = 2;
    while (i < num) {
        if (num % i === 0) divisorsArr.push(i);
        i++;
    }

    return divisorsArr.length > 0 ? divisorsArr : num + ' is prime';
};
