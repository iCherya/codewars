/**
 * 7 kyu - Simple Fun #74: Growing Plant
 * https://www.codewars.com/kata/58941fec8afa3618c9000184
 */
function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let currentHeight = 0;
    let days = 0;

    while (currentHeight < desiredHeight) {
        days++;
        currentHeight += upSpeed;

        if (currentHeight >= desiredHeight) {
            return days;
        }

        currentHeight -= downSpeed;
    }
}
