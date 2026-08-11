class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let r = 0;
        let s = [];

        for (const t of tokens) {
            if (!Number.isNaN(Number(t))) s.push(Number(t));
            if (t === '+') {
                const res = s.reduce((acc, val) => acc + val, r);
                r = res;
                s.length = 0;
                continue;
            }
            if (t === '-') {
                const res = s.reduce((acc, val) => acc - val, r);
                r = res;
                s.length = 0;
                continue;
            }
            if (t === '*') {
                const res = s.reduce((acc, val) => acc * val, r);
                r = res;
                s.length = 0;
                continue;
            }
            if (t === '/') {
                const res = s.reduce((acc, val) => acc / val, r);
                r = res;
                s.length = 0;
                continue;
            }
        }

        return r;
    }
}
