function fact(num) {
  if (num <= 1) {
    return 1;
  }
  return num * fact(num - 1);
}

function fib(num) {
  if (num == 1 || num == 0) {
    return num;
  }

  return fib(num - 1) + fib(num - 2);
}

for (let i = 0; i < 10; i++) {
  console.log(fib(i));
}

console.log(fact(4));
console.log(fact(5));
