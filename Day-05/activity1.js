// Function declaration

function isEven(num) {
  if (num % 2 === 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
  return num % 2 === 0;
}

function square(num) {
  return num * num;
}

isEven(24);
console.log(square(4));
