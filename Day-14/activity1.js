class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello my name is ${this.name} and i am ${this.age} years old `;
  }
  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age is ${this.age} `);
  }
}

const p = new Person("Deepak tala", 21);
console.log(p.greet());
p.updateAge(22);
console.log(p.greet());
