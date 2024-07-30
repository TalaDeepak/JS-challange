function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = temp;
  }
}

function partition(arr, si, ei) {
  let i = si - 1;
  let pivot = arr[ei];
  for (let j = si; j < ei; j++) {
    if (arr[j] <= pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  i++;
  let temp = arr[i];
  arr[i] = arr[ei];
  arr[ei] = temp;
  return i;
}

function quickSort(arr, si, ei) {
  if (si >= ei) {
    return;
  }
  let pi = partition(arr, si, ei);
  quickSort(arr, si, pi - 1);
  quickSort(arr, pi + 1, ei);
}

let arr = [5, 3, 8, 2, 1, 6, 4, 7];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
