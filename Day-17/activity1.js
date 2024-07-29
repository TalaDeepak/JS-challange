class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }
  addNode(val) {
    if (this.root === null) {
      this.root = new Node(val);
    } else {
      let temp = this.root;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = new Node(val);
    }
  }
  remove(val) {
    if (this.root === null) {
      return;
    } else {
      let prev = this.root;
      let cur = this.root;
      while (cur.data !== val) {
        prev = cur;
        cur = cur.next;
      }
      prev.next = cur.next;
    }
  }
  display() {
    let temp = this.root;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

let list = new LinkedList();
list.addNode(4);
list.addNode(9);
list.addNode(12);
list.addNode(2);
list.addNode(5);

list.display();
list.remove(12);
console.log("---------------------------------------------");
list.display();
