const { NotImplementedError } = require('../extensions/index.js');


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

module.exports = {
  Stack
};
