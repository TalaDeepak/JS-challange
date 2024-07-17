function prod(num1, num2 = 2) {
  return num1 * num2;
}

console.log(prod(3, 4));

function greet(name, age = 4) {
  console.log(
    `Congratulations ${name} ,you have passed ${age} years on this beautiful earth`
  );
}

greet("Seenu", 22);
