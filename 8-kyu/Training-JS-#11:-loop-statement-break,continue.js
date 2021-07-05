/**
 * 8 kyu - Training JS #11: loop statement --break,continue
 * https://www.codewars.com/kata/5721c189cdd71194c1000b9b
 */
const grabDoll = (dolls) => {
    const bag = [];

    for (const el of dolls) {
        if (el === 'Hello Kitty' || el === 'Barbie doll') {
            bag.push(el);
        } else continue;

        if (bag.length > 2) break;
    }

    return bag;
};
