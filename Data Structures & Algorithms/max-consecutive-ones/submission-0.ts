class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let max = 0;
        let current = 0;

        for (const num of nums) {
            current = num === 1 ? current + 1 : 0;
            if (current > max) max = current;
        }

        return max;
    }
}
