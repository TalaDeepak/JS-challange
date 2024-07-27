let arr = [];

for (let i = 0; i < 9; i++) {
  arr.push(function () {
    console.log(i);
  });
}

arr[8]();
