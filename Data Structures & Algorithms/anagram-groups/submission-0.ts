class Solution {
    /**
     * @param {string[]} input
     * @return {string[][]}
     */
    groupAnagrams(input: string[]): string[][] {
        const map = new Map();
        
        for (const word of input) {
            const sortedWord = [...word].sort().join();
            const group = map.get(sortedWord);

            if (group) group.push(word);
            else map.set(sortedWord, [word]); 
        }

        return [...map.values()];
    }
}
