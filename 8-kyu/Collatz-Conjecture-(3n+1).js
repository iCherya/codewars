/**
 * 8 kyu - Collatz Conjecture (3n+1)
 * https://www.codewars.com/kata/577a6e90d48e51c55e000217
 */
const hotpo = (n, count = 0) => {
    if (n === 0) return 0;
    if (n === 1) return count;

    n = n % 2 ? 3 * n + 1 : n / 2;
    return hotpo(n, count + 1);
};
