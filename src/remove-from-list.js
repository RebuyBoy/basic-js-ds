const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 */
// const l = [3, 1, 2, 3, 4, 5];
// const k = 3;
// the output should be[1, 2, 4, 5]

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
