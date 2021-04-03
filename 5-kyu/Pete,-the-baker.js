/* eslint-disable guard-for-in */
/**
 * 5 kyu - Pete, the baker
 * https://www.codewars.com/kata/525c65e51bf619685c000059
 */
function cakes(recipe, available) {
    const quantity = [];

    for (const ingredient in recipe) {
        if (!available[ingredient]) return 0;

        const q = Math.floor(available[ingredient] / recipe[ingredient]);
        quantity.push(q);
    }

    return Math.min(...quantity);
}
