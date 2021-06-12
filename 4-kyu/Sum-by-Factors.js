/**
 * 4 kyu - Sum by Factors
 * https://www.codewars.com/kata/54d496788776e49e6b00052f
 */
const sumOfDivided = (numbers) => {
    const isPrime = (n) => {
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) return false;
        }

        return n > 1;
    };

    const primeFactors = {};
    const result = {};

    numbers.forEach((number) => {
        const absoluteNumber = Math.abs(number);
        const primeNumbers = [];

        for (let i = 2; i <= absoluteNumber; i++) {
            if (isPrime(i) && absoluteNumber % i === 0) {
                primeNumbers.push(i);
            }
        }

        if (!primeFactors[number]) primeFactors[number] = primeNumbers;
        else primeFactors[number] = primeFactors[number].concat(primeNumbers);
    });

    Object.entries(primeFactors).forEach(([number, primesArr]) => {
        primesArr.forEach((prime) => {
            if (!result[prime]) result[prime] = 0;
            result[prime] += +number;
        });
    });

    return Object.keys(result).map((prime) => [+prime, result[prime]]);
};
