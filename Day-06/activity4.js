let arr = [2, 4, 6, 7, 8];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("-------------------------------------");

arr.forEach((el) => {
  el *= 2;
  console.log(el);
});
console.log("-------------------------------------");
console.log(arr);
