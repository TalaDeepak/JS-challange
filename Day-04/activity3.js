let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

let num = 4;
let res = 1;

do {
  res *= num;
  num--;
} while (num > 0);

console.log(`Factorial of ${4} is ${res}`);
