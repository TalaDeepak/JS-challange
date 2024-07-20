let name = "Deepak tala";
let age = 21;
let address = "Naya gaam";

function details() {
  return `${this.name} lives in ${this.address} and is ${this.age} years old`;
}

let person = { name, age, address, details };
console.log(person.details());

// Define your variables
let key1 = "name";
let key2 = "age";
let key3 = "country";

// Create an object using computed property names
let person2 = {
  [key1]: "Deepak tala",
  [key2]: 21,
  [key3]: "India",
};

// Log the object to the console
console.log(person2);
