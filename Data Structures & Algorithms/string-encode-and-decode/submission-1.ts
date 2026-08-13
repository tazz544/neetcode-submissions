const SEPARATOR = '/spearator/'

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.length ? strs.join(SEPARATOR) : '';
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        return str.length ? str.split(SEPARATOR) : [''];
    }
}
