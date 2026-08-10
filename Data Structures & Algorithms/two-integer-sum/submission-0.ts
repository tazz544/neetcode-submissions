class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; i < nums.length; i++) {
                if (i === j) {
                    continue;
                }
                
                const n = nums[i];
                const m = nums[j];

                if (n + m === target) {
                    return [i, j];
                }
            }
        }

        return [];
    }
}
