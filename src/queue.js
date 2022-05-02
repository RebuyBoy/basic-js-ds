const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head;
    this.size = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (this.size === 0) {
      this.head = new ListNode(value);
      this.size++;
    } else {
      let tmp = this.head;
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      tmp.next = new ListNode(value);
      this.size++;
    }
  }
  dequeue() {
    if (this.size > 0) {
      const topElement = this.head.value;
      this.head = this.head.next;
      this.size--;
      return topElement;
    }
  }
}

module.exports = {
  Queue
};
