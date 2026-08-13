const SEPARATOR = '#'

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = '';
        for (const s of strs) {
            result += s.length + SEPARATOR + s;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== SEPARATOR) j++;
            const len = parseInt(str.slice(i, j));
            result.push(str.slice(j + 1, j + 1 + len));
            i = j + 1 + len;
        }
        return result;
    }
}
