/**
 * 7 kyu - Money, Money, Money
 * https://www.codewars.com/kata/563f037412e5ada593000114
 */
const calculateYears = (principal, interest, tax, desired) => {
    let years = 0;

    while (principal < desired) {
        principal += principal * interest * (1 - tax);
        years += 1;
    }

    return years;
};
