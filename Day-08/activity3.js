let arr = [2, 3, 4, 5];
let arr2 = [...arr, 10, 22];
console.log(arr2);

function sum(...sum) {
  let res = 0;
  for (let i of sum) {
    res += i * 1;
  }
  console.log(res);
}

sum(10, 3, 5, 3);
