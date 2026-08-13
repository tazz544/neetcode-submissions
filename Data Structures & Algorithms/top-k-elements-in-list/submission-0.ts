class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        const result = new Array<number>(k).fill(0);
        let currentHighest = 0;

        for (const num of nums) {
            if (map.has(num)) map.set(num, map.get(num) + 1);
            else map.set(num, 1);

            if (map.get(num) > currentHighest) {
                result.unshift(num);
                result.pop();
                currentHighest = map.get(num);
            }
        }

        return result;
    }
}
