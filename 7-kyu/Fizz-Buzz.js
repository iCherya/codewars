/**
 * 7 kyu - Fizz Buzz
 * https://www.codewars.com/kata/5300901726d12b80e8000498
 */
const fizzbuzz = (n) => {
    const result = [];
    let counter = 1;

    while (counter <= n) {
        if (counter % 3 === 0 || counter % 5 === 0) {
            let string = '';

            if (counter % 3 === 0) string += 'Fizz';
            if (counter % 5 === 0) string += 'Buzz';

            result.push(string);
        } else {
            result.push(counter);
        }

        counter++;
    }

    return result;
};
