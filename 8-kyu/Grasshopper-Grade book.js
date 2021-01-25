/**
 * 8 kyu - Grasshopper - Grade book
 * https://www.codewars.com/kata/55cbd4ba903825f7970000f5
 */
const getGrade = (s1, s2, s3) => {
    const average = (s1 + s2 + s3) / 3;

    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';

    return 'F';
};
