/**
 * 6 kyu - Build Tower Advanced
 * https://www.codewars.com/kata/57675f3dedc6f728ee000256
 */
const towerBuilder = (nFloors, nBlockSizes) => {
    const [width, height] = nBlockSizes;
    const tower = [];

    for (let i = 0, nBlocks = nFloors - 1; i < nFloors; i++, nBlocks--) {
        for (let j = 0; j < height; j++) {
            const stars = '*'.repeat((i * 2 + 1) * width);
            const spaces = ' '.repeat(nBlocks * width);
            const section = spaces + stars + spaces;

            tower.push(section);
        }
    }

    return tower;
};
