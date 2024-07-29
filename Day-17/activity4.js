class Node {
  constructor(Val) {
    this.val = Val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return;
    }
    let queue = [this.root];
    while (queue.length) {
      let node = queue.shift();
      if (node.left == null) {
        node.left = newNode;
        return;
      } else {
        queue.push(node.left);
      }
      if (node.right == null) {
        node.right = newNode;
        break;
      } else {
        queue.push(node.right);
      }
    }
  }

  inOrder(node = this.root) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.val);
      this.inOrder(node.right);
    }
  }
}

const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);

console.log("In-order Traversal:");
tree.inOrder();
