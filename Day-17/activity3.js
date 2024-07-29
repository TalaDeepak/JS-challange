class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(ele) {
    this.arr.push(ele);
  }
  dequeue() {
    if (this.empty()) {
      console.log("Add element first");
      return;
    }
    this.arr.shift();
  }
  front() {
    if (this.empty()) {
      console.log("Add element first");
      return;
    }
    return this.arr[0];
  }
  empty() {
    return this.arr.length === 0;
  }
}

function printer(jobs) {
  let q = new Queue();
  for (let job of jobs) {
    q.enqueue(job);
  }
  while (!q.empty()) {
    console.log(q.front());
    q.dequeue();
  }
}

let arr = ["deepak", "divas", "govind", "kamal"];
printer(arr);
