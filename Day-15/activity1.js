function outer(outer) {
  return function inner(inner) {
    return inner * outer;
  };
}

function counter() {
  let val = 0;
  function increase() {
    val++;
  }
  function getVal() {
    return val;
  }
  return {
    inc: increase,
    get: getVal,
  };
}

// let inner = outer(2);
// console.log(inner(2));

let count = counter();
count.inc();
count.inc();
count.inc();
console.log(count.get());
