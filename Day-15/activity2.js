let createIdGenerator = (function () {
  let id = 0;
  return function () {
    id++;
    return id;
  };
})();

console.log(createIdGenerator());
console.log(createIdGenerator());
console.log(createIdGenerator());

function greet(name) {
  return function () {
    return `hello ${name} how are you`;
  };
}

let p = greet("parhlad");
let s = greet("sunny");

console.log(s());
console.log(p());
