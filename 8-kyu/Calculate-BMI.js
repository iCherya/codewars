/**
 * 8 kyu - Calculate BMI
 * https://www.codewars.com/kata/57a429e253ba3381850000fb
 */
const bmi = (weight, height) => {
    const bmiValue = weight / Math.pow(height, 2);

    if (bmiValue <= 18.5) return 'Underweight';
    if (bmiValue <= 25) return 'Normal';
    if (bmiValue <= 30) return 'Overweight';

    return 'Obese';
};
