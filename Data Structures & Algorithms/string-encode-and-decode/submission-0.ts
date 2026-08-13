const SEPARATOR = '/spearator/'

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.join(SEPARATOR);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        return str.split(SEPARATOR);
    }
}
