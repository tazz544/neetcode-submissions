class Solution {
    /**
     * @param {number[]} input
     * @return {number[]}
     */
    replaceElements(input: number[]): number[] {
        const result = [];
        let currentMax;

        for (let i = input.length; i > 0; i--) {
            if (i === input.length) currentMax = -1;
            if (input[i] > currentMax) currentMax = input[i];

            result.push(currentMax);
        }

        return result.reverse();
    }
}
