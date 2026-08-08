class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const n = nums.length;
        const r = new Array(n * 2);

        for (let i = 0; i < n; i++) {
            r[i] = r[i + n] = nums[i];
        }

        return r;
    }
}
