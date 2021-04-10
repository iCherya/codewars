/**
 * 8 kyu - 101 Dalmatians - squash the bugs, not the dogs!
 * https://www.codewars.com/kata/56f6919a6b88de18ff000b36
 */
const howManyDalmatians = (number) => {
    if (number <= 10) return 'Hardly any';
    if (number <= 50) return 'More than a handful!';
    if (number === 101) return '101 DALMATIANS!!!';

    return "Woah that's a lot of dogs!";
};
