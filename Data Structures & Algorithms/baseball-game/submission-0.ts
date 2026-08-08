class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const stack = [];
        
        for (const operation of operations) {
            const operationNumeric = Number(operation);

            if (!isNaN(operationNumeric)) {
                stack.push(operationNumeric);
                continue;
            }
            if (operation === '+') {
                const lastTwoElements = stack.slice(-2);
                stack.push(lastTwoElements.reduce((acc, n) => acc + n, 0));
            }
            if (operation === 'D') {
                const lastElement = stack.at(-1);
                stack.push(lastElement * 2);
            }
            if (operation === 'C') {
                stack.pop();
            }
        }

        return stack.reduce((acc, n) => acc + n, 0);
    }
}
