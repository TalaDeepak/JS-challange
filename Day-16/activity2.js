function sumFun(arr) {
  if (arr.length == 0) {
    return 0;
  }
  let last = arr[arr.length - 1];
  arr.pop();
  return last + sumFun(arr);
}

function fun(arr, n, i) {
  if (i == n - 1) {
    return arr[i];
  }
  let res = fun(arr, n, i + 1);
  return Math.max(arr[i], res);
}

const arr = [1, 2, 3, 4, 5, 6];
let n = arr.length;

console.log(sumFun(arr.slice()));
console.log(fun(arr.slice(), n, 0));
