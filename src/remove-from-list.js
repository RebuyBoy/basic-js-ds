const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

class ListNode {
  constructor(x, next) {
    this.value = x;
    this.next = next;
  }
}
function removeKFromList(l, k) {
  let prev = l;
  let tmp = prev;

  while (tmp !== null) {
    if (tmp.value !== k) {
      prev = tmp;
      tmp = tmp.next;
    } else {
      if (tmp === l) {
        l = l.next;
        prev = l;
      } else {
        prev.next = tmp.next === null ? null : tmp.next;
      }
      tmp = tmp.next;
    }
  }
  return l;
}

module.exports = {
  removeKFromList
};
