/**
 * 5 kyu - Directions Reduction
 * https://www.codewars.com/kata/550f22f4d758534c1100025a
 */
const dirReduc = (arr) => {
    const result = [];

    for (const direction of arr) {
        if (result.length > 0) {
            const previousDirection = result.pop();

            if (
                (direction === 'NORTH' && previousDirection === 'SOUTH') ||
                (direction === 'SOUTH' && previousDirection === 'NORTH') ||
                (direction === 'WEST' && previousDirection === 'EAST') ||
                (direction === 'EAST' && previousDirection === 'WEST')
            ) {
                continue;
            }
            result.push(previousDirection);
        }

        result.push(direction);
    }

    return result;
};
