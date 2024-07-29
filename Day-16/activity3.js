function rev(str, n, i) {
  if (n - 1 == i) {
    return str[i];
  }
  let ch = str[i];
  return rev(str, n, i + 1) + ch;
}

function pre(str, i, j, n) {
  if (n == 1) {
    return true;
  }
  if (n == 2) {
    return str[i] == str[j];
  }

  if (str[i] != str[j]) {
    return false;
  } else {
    n -= 2;
    return pre(str, i++, j--, n);
  }
}

let str = "mam";
let s = "level";
let n = s.length;
console.log(rev(s.slice(), n, 0));
console.log(pre(s.slice(), 0, n - 1, n));
