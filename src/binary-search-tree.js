const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return data;
    } else {
      let curr = this.head;
      while (curr !== null) {
        if (data < curr.data) {
          if (curr.left === null) {
            curr.left = newNode;
            return data;
          } else
            curr = curr.left;
        } else if (data > curr.data) {
          if (curr.right === null) {
            curr.right = newNode;
            return data;
          } else {
            curr = curr.right;
          }
        }
      }
    }
  }

  has(data) {
    let curr = this.head;
    while (curr !== null) {
      if (data === curr.data) {
        return true;
      }
      if (data < curr.data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return false;
  }

  find(data) {
    let curr = this.head;
    while (curr !== null) {
      if (data === curr.data) {
        return curr;
      }
      if (data < curr.data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return null;
  }

  remove(data) {
    let curr = this.head;
    let parent = null;
    while (curr !== null && curr.data !== data) {
      parent = curr;
      if (data < curr.data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    if (curr === null) {
      return;
    }

    if (curr.left === null && curr.right === null) {
      if (curr === this.head) {
        this.head = null;
        return;
      }
      parent.left === curr ? parent.left = null : parent.right = null;
    }
    else if (curr.left === null) {
      if (curr === this.head) {
        this.head = this.head.right;
        return;
      }
      parent.left === curr ? parent.left = curr.right : parent.right = curr.right;
    }
    else if (curr.right === null) {
      if (curr === this.head) {
        this.head = this.head.left;
        return;
      }
      parent.left === curr ? parent.left = curr.left : parent.right = curr.left;

    } else {
      let tmp = curr.left;
      while (tmp.right !== null) {
        tmp = tmp.right;
      }
      const maxVal = tmp.data;
      this.remove(maxVal);
      curr.data = maxVal;
    }
  }

  min() {
    let curr = this.head;
    if (curr === null) {
      return null;
    }
    while (curr.left !== null) {
      curr = curr.left;
    }
    return curr.data;
  }

  max() {
    let curr = this.head;
    if (curr === null) {
      return null;
    }
    while (curr.right !== null) {
      curr = curr.right;
    }
    return curr.data;
  }
}

module.exports = {
  BinarySearchTree
};