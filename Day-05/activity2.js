// Function expression

let max = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};

let concat = function (str1, str2) {
  return str1 + "" + str2;
};

console.log(concat(2, 3));
console.log(max(44, 3));
