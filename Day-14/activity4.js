class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  getFullName() {
    return this.firstname + " " + this.lastname;
  }
  setFull(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const P = new Person("Deepak", "TALA");
console.log(P.getFullName());
P.setFull("Deepak", "Panghal");
console.log(P.getFullName());
