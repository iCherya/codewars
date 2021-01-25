/**
 * Beta - All Star Code Challenge #9
 * https://www.codewars.com/kata/5864614683f7e6e7830000c1
 */
const bite = (thing) => {
    if (thing.race === 'human') {
        thing.race = 'zombie';
    }

    return thing;
};
