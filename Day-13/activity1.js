function sum(num1, num2) {
  return num1 + num2;
}

let person = {
  name: "Deepak tala",
  age: 21,
  getDetails() {
    return `${this.name} is ${this.age} years old`;
  },
};

module.exports = { sum, person };
