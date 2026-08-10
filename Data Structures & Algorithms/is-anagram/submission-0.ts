class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sortedS = [...s].sort();
        const sortedT = [...t].sort();

        if (sortedS.length !== sortedT.length) {
            return false;
        }

        for (let i = 0; i < s.length; i++) {
            if (sortedS[i] !== sortedT[i]) {
                return false;
            }
        }

        return true;
    }
}
