const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// A **binary tree** is a hierarchical **data structure** in which each **node** has a **value** (in this case, it is also a key) and **links** to the **left** and **right** **children**. The **node** that is at the topmost level (which is not someone else's child) is called the **root**. **Nodes** that have no children are called **leaves**.

// A **binary search tree** is a **binary tree** with additional properties: the value of the **left** child is **less** than the value of the parent, and the value of the **right** child is **greater** than the value of the parent for each tree **node**. That is, the data in the binary search tree is stored sorted. Each time you **add** a new or **remove** an existing node, the sorted order of the tree is preserved. When **searching** for an element, the search value is compared with the root. If the desired is **greater** than the root, then the search continues in the **right** child of the root, if **less**, then in the **left**, if **equal**, then the value is **found** and the search stops.

// Your task is to implement the class `BinarySearchTree`.
// Each instance of `BinarySearchTree` must have following methods:
//   * `root` — return **root node** of the tree
//   * `add(data)` — add **node** with `data` to the tree
//   * `has(data)` — returns `true` if **node** with the `data` exists in the tree and `false` otherwise
//   * `find(data)` — returns **node** with the `data` if **node** with the `data` exists in the tree and `null` otherwise
//   * `remove(data)` — removes **node** with the `data` from the tree if **node** with the `data` exists
//   * `min` — returns **minimal** **value** stored in the tree (or `null` if tree has no **nodes**)
//   * `max` — returns **maximal** **value** stored in the tree (or `null` if tree has no **nodes**)




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

      //  // find its inorder successor node
      //  Node successor = getMinimumKey(curr.right);

      //  // store successor value
      //  int val = successor.data;

      //  // recursively delete the successor. Note that the successor
      //  // will have at most one child (right child)
      //  deleteNode(root, successor.data);

      //  // copy value of the successor to the current node
      //  curr.data = val;
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
const tree = new BinarySearchTree();

tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(2);
tree.remove(9);
tree.remove(14);
tree.remove(6);
tree.remove(128);
tree.remove(8);
tree.remove(31);
tree.remove(54);
tree.remove(1);
console.log();
// console.log(tree.has(14));
// console.log(tree.has(51));
// console.log(tree.find(25));
// console.log(tree.has(51));
// console.log(tree.min());

module.exports = {
  BinarySearchTree
};