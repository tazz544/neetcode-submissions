class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const tagsMap = {
            ')': '(',
            ']': '[',
            '}': '{',
        }
        const stack = [];

        for (const c of s) {
            if (c in tagsMap) {
                if (stack.length === 0 || stack.at(-1) !== tagsMap[c]) {
                    return false;
                }
                stack.pop();
            } else {
                stack.push(c);
            }
        }

        return Boolean(stack.length) === false;
    }
}
