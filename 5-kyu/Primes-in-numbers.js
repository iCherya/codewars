/**
 * 5 kyu - Primes in numbers
 * https://www.codewars.com/kata/54d512e62a5e54c96200019e
 */
const primeFactors = (n) => {
    let primes = {};

    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            if (!primes[i]) primes[i] = 0;
            primes[i]++;

            n = n / i;
            i = 1;
        }
    }

    return (
        '(' +
        Object.entries(primes)
            .map((el) => {
                if (el[1] === 1) return el[0];
                return el.join('**');
            })
            .join(')(') +
        ')'
    );
};
