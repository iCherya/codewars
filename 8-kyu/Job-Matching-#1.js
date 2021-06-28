/**
 * 8 kyu - Job Matching #1
 * https://www.codewars.com/kata/56c22c5ae8b139416c00175d
 */
const match = (candidate, job) => {
    if (!candidate.minSalary || !job.maxSalary) throw new Error();

    return candidate.minSalary * 0.9 <= job.maxSalary;
};
