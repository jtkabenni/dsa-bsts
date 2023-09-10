class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    // if no root, return new node as root
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }

    // if val is greater than current val, and no current.right, set current right to new node, then return
    // if there is current right, set current val to current right
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    // if no root, return new node as root

    if (!node) {
      this.root = new Node(val);
      return this;
    }

    if (val < node.val) {
      if (!node.left) {
        node.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, node.left);
    } else if (val > node.val) {
      if (!node.right) {
        node.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, node.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) {
        return current;
      }
      if (val > current.val) {
        current = current.right;
      } else if (val < current.val) {
        current.current.left;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  //    5
  //  4   10
  // 1 2

  // (2,5)
  findRecursively(val, current = this.root) {
    if (current) {
      if (val === current.val) {
        return current;
      } else if (val < current.val) {
        return this.findRecursively(val, current.left);
      } else if (val > current.val) {
        return this.findRecursively(val, current.right);
      }
    }
    return undefined;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visited = [];
    let current = this.root;
    function preOrderTraverse(node) {
      visited.push(node.val);
      if (node.left) {
        preOrderTraverse(node.left);
      }

      if (node.right) {
        preOrderTraverse(node.right);
      }
    }
    preOrderTraverse(current);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = [];
    let current = this.root;
    function preOrderTraverse(node) {
      if (node.left) {
        preOrderTraverse(node.left);
      }
      visited.push(node.val);
      if (node.right) {
        preOrderTraverse(node.right);
      }
    }
    preOrderTraverse(current);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = [];
    let current = this.root;
    function preOrderTraverse(node) {
      if (node.left) {
        preOrderTraverse(node.left);
      }

      if (node.right) {
        preOrderTraverse(node.right);
      }
      visited.push(node.val);
    }
    preOrderTraverse(current);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = [this.root];
    let result = [];
    while (queue.length) {
      const current = queue.shift();
      result.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
