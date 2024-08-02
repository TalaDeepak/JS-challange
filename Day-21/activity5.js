function isOpen(c) {
  const res = c === "(" || c === "{" || c === "[";
  return res;
}

function isMatching(c, t) {
  const res =
    (c === "{" && t === "}") ||
    (c === "(" && t === ")") ||
    (c === "[" && t === "]");

  return res;
}

var isValid = function (s) {
  const stack = [];
  for (let i of s) {
    if (isOpen(i)) stack.push(i);
    else {
      if (s.length === 0) return false;
      else if (!isMatching(stack[stack.length - 1], i)) return false;
      else stack.pop();
    }
  }

  return !stack.length;
};
