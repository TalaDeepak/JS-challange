function bs(arr, low, high, key) {
  if (low > high) {
    return -1;
  }
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] == key) {
    return mid;
  } else if (arr[mid] > key) {
    return bs(arr, low, mid - 1, key);
  } else {
    return bs(arr, mid + 1, high, key);
  }
}

function countTarget(arr, ele, i, n) {
  if (i == n - 1) {
    return arr[i] == ele ? 1 : 0;
  }
  let j = i + 1;
  const res = countTarget(arr, ele, j, n);
  if (arr[i] == ele) {
    return res + 1;
  } else {
    return res;
  }
}

let arr = [2, 3, 4, 5, 6, 7, 8, 9];
let high = arr.length - 1;

console.log(bs(arr, 0, high, 6));
console.log(countTarget(arr.slice(), 5, 0, arr.length));
