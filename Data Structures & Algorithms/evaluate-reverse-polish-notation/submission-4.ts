class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    const ops: Record<string, (a: number, b: number) => number> = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => Math.trunc(a / b),
    };

    for (const t of tokens) {
      const op = ops[t];
      if (op) {
        const b = stack.pop()!;
        const a = stack.pop()!;
        stack.push(op(a, b));
      } else {
        stack.push(Number(t));
      }
    }

    return stack.pop()!;
  }
}
