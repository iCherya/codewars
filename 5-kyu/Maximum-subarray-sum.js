/**
 * 5 kyu - Maximum subarray sum
 * https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
 */
const maxSequence = (nums) => {
    let max = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1];
        }
        max = Math.max(max, nums[i]);
    }

    return max;
};
