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
        if (!str.length && typeof str === 'string') return [''];

        return str.length ? str.split(SEPARATOR) : [];
    }
}
