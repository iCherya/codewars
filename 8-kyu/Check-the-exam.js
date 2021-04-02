/**
 * 8 kyu - Check the exam
 * https://www.codewars.com/kata/5a3dd29055519e23ec000074
 */
const checkExam = (array1, array2) => {
    let score = 0;

    for (let i = 0; i < array1.length; i += 1) {
        const answer = array2[i];
        const correct = array1[i];

        if (answer) {
            if (answer === correct) score += 4;
            else score -= 1;
        }
    }

    return score < 0 ? 0 : score;
};
