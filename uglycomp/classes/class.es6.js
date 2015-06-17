class Human {
  constructor(age, name) {
    this.age = age;
    this.fname = name.fname;
    this.lname = name.lname;
  }

  getAge() {
    return this.age;
  }

  getName() {
    return `${this.fname} ${this.lname}`;
  }

  getBirthDay() {
    return -this.age + +new Date();
  }
}
