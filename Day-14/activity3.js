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
  static greeting() {
    return "Hello , i am a good person";
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    if (!Student.numS) {
      Student.numS = 0;
    }
    Student.numS++;
    console.log(`Total number of students: ${Student.numS}`);
  }
  getStudentId() {
    return this.studentId;
  }
  greet() {
    return `Hey there , I am ${this.name} and having student id ${this.studentId} , i am ${this.age} years old `;
  }
}

console.log(Person.greeting());

const student = new Student("kamal", 20, 124);
const student1 = new Student("divas", 20, 124);
console.log(student1.greet());
console.log(student.greet());
