let arr = [1, 2, 3, 4, 5];
let arr1 = arr.map((el) => el * 2);
console.log(arr1);

let arr2 = arr.filter((el) => el % 2 === 0);
console.log(arr2);

let res = arr.reduce((acc, el) => acc + el, 0);
console.log(res);
