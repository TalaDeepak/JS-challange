class Stack {
  constructor() {
    this.arr = [];
  }
  push(val) {
    this.arr.push(val);
  }
  pop() {
    this.arr.pop();
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
  empty() {
    return this.arr.length === 0;
  }
}

function reverse(str) {
  let st = new Stack();
  for (let ch of str) {
    st.push(ch);
  }
  let res = "";
  while (!st.empty()) {
    res += st.peek();
    st.pop();
  }
  return res;
}

console.log(reverse("kapeed"));
