function memoize(fun) {
  let cache = {};

  return function (...args) {
    let key = JSON.stringify(args);
    if (cache[key] != undefined) {
      return cache[key];
    } else {
      const res = fun(...args);
      cache[key] = res;
      return res;
    }
  };
}

function slowAdd(x, y) {
  return x + y;
}

function fact(num) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
}

const memo = memoize(fact);

console.log(memo(4));
console.log(memo(4));
console.log(memo(5));
console.log(memo(5));
