const SEPARATOR = '/spearator/'

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (!strs.length) return ''; 

        return strs.join(SEPARATOR);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (!str.length && typeof str === 'string') return ['']; 
        if (!str.length) return [];

        return str.length ? str.split(SEPARATOR) : [];
    }
}
