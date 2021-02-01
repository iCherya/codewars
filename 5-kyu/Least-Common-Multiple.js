/**
 * 5 kyu - Least Common Multiple
 * https://www.codewars.com/kata/5259acb16021e9d8a60010af
 */
const lcm = (...args) => {
    const lcmTwoNums = (a, b) => (a * b) / gcd(a, b);
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    if (args.length === 1) return args[0];
    if (args.length == 2) return lcmTwoNums(args[0], args[1]);

    const last = args.pop();
    return lcmTwoNums(last, lcm(...args));
};
