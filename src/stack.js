const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 */
class Stack {
  constructor() {
    this.arr = [];
  }

  push(element) {
    return this.arr.push(element);
  }

  pop() {
    return this.arr.pop();
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }
}

const stack = new Stack();
console.log(stack.push(1));
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());

module.exports = {
  Stack
};
