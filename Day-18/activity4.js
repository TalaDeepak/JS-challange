function mergeArray(arr1, arr2) {
  let i = 0;
  let j = 0;
  let res = [];

  while (i < arr1.length && j < arr1.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i++]);
  }
  while (j < arr2.length) {
    res.push(arr2[j++]);
  }

  console.log(res);
}

function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;

  reverse(arr, 0, n - 1);

  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  console.log(arr);
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// mergeArray([2, 3, 4, 5, 6, 7], [1, 12, 16, 20, 23]);
rotateArray([1, 2, 3, 4, 5, 6, 7], 3); // Output: [5, 6, 7, 1, 2, 3, 4]
rotateArray([1, 2, 3, 4, 5], 2);
