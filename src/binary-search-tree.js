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
    this.size = 0;
  }

  root() {
    return this.head;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.size === 0) {
      this.head = newNode;
      this.size++;
      return data;
    } else {
      let curr = this.head;
      while (curr !== null) {
        if (data < curr.data) {
          if (curr.left === null) {
            curr.left = newNode;
            this.size++;
            return data;
          } else
            curr = curr.left;
        } else if (data > curr.data) {
          if (curr.right === null) {
            curr.right = newNode;
            this.size++;
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
// const tree = new BinarySearchTree();

// console.log(tree.root());
// tree.add(15);
// tree.add(25);
// tree.add(10);
// tree.add(5);
// console.log(tree.has(14));
// console.log(tree.has(51));
// console.log(tree.find(25));
// console.log(tree.has(51));
// console.log(tree.min());

module.exports = {
  BinarySearchTree
};