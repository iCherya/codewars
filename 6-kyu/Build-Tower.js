/**
 * 6 kyu - Build Tower
 * https://www.codewars.com/kata/576757b1df89ecf5bd00073b
 */
const towerBuilder = (nFloors) => {
    const tower = [];

    for (let i = 0; i < nFloors; i++) {
        const stars = '*'.repeat(i * 2 + 1);
        const spaces = ' '.repeat(nFloors - i - 1);
        const floor = spaces + stars + spaces;

        tower.push(floor);
    }

    return tower;
};
