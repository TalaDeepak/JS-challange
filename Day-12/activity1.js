function errorThrow() {
  throw new Error("I am here only to throw error");
}

try {
  errorThrow();
} catch (error) {
  console.log(error);
}

function divide(num1, num2) {
  if (num2 == 0) {
    throw new Error("Can't divide by 0");
  }
  let res = num1 / num2;
  return res;
}

try {
  let re = divide(2, 2);
  console.log("result is ", re);
} catch (error) {
  console.log(error);
}
