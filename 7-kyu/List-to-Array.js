/**
 * 7 kyu - List to Array
 * https://www.codewars.com/kata/557dd2a061f099504a000088
 */
const listToArray = (list) => {
    const array = [];

    while (list) {
        array.push(list.value);
        list = list.next;
    }

    return array;
};
