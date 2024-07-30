function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      return i;
    }
  }
  return -1;
}

function bs(arr, key, low, high) {
  if (low > high) {
    return -1;
  }
  let mid = low + (high - low) / 2;
  if (arr[mid] == key) {
    return mid;
  } else if (arr[mid] > key) {
    return bs(arr, key, low, mid - 1);
  } else {
    return bs(arr, key, mid + 1, high);
  }
}

let arr = [2, 6, 14, 22, 54, 87, 95];
console.log(bs(arr, 87, 0, arr.length - 1));
