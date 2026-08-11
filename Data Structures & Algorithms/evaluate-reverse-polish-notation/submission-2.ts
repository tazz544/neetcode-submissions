class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let r = 0;
        let s = [];

        const _updateVal = (op: (acc: number, val: number) => number) => {
            r = s.reduce(op, r);
            s.length = 0;
        }

        for (const t of tokens) {
            if (!Number.isNaN(Number(t))) s.push(Number(t));
            if (t === '+') {
                _updateVal((acc, val) => acc + val)
                continue;
            }
            if (t === '-') {
                _updateVal((acc, val) => acc - val)
                continue;
            }
            if (t === '*') {
                _updateVal((acc, val) => acc * val)
                continue;
            }
            if (t === '/') {
                _updateVal((acc, val) => acc / val)
                continue;
            }
        }

        return r;
    }
}
