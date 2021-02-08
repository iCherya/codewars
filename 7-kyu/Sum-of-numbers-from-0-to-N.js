/**
 * 7 kyu - Sum of numbers from 0 to N
 * https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763
 */
const SequenceSum = (function () {
    function SequenceSum() {}

    SequenceSum.showSequence = function (count) {
        if (count < 0) return `${count}<0`;
        if (count === 0) return '0=0';

        let sequence = '0';
        let sum = 0;
        let counter = 1;

        while (counter <= count) {
            sequence += `+${counter}`;
            sum += counter;
            counter++;
        }

        return `${sequence} = ${sum}`;
    };

    return SequenceSum;
})();
