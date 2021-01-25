/**
 * 5 kyu - Double Cola
 * https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0
 */
const whoIsNext = (names, r) => {
    let groupSum = names.length,
        exp = 0;

    while (groupSum < r) {
        groupSum += names.length * 2 ** ++exp;
    }

    const previousGroupsSum = groupSum - names.length * 2 ** exp;
    const lastGroupIndex = r - previousGroupsSum;
    const index = Math.ceil(lastGroupIndex / 2 ** exp);

    return names[index - 1];
};
