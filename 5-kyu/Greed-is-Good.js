/**
 * 5 kyu - Greed is Good
 * https://www.codewars.com/kata/5270d0d18625160ada0000e4
 */
const score = (dice) => {
    const rules = [
        ['111', 1000],
        ['666', 600],
        ['555', 500],
        ['444', 400],
        ['333', 300],
        ['222', 200],
        ['1', 100],
        ['5', 50]
    ];

    let hand = dice.sort().join('');
    let result = 0;

    for (let i = 0; i < dice.length; i += 1) {
        for (let j = 0; j < rules.length; j += 1) {
            const [combination, profit] = rules[j];

            if (hand.indexOf(combination) >= 0) {
                result += profit;
                hand = hand.replace(combination, '');
            }
        }
    }

    return result;
};
