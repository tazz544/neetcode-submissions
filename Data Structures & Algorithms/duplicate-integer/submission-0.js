class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet = new Set([...nums]);

        return Array.from(numsSet).length !== nums.length;
    }
}
