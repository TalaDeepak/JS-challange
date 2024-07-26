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

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  getStudentId() {
    return this.studentId;
  }
  greet() {
    return `Hey there , I am ${this.name} and having student id ${this.studentId} , i am ${this.age} years old `;
  }
}

const student = new Student("kamal", 20, 124);
console.log(student.getStudentId());
console.log(student.greet());
