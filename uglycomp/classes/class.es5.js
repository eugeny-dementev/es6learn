function Human(age, name) {
  this.age = age;
  this.fname = name.fname;
  this.lname = name.lname;
}

Human.prototype.getAge = function getAge() {
  return this.age;
}

Human.prototype.getName = function getName() {
  return '' + this.fname + ' ' + this.lname;
}

Human.prototype.getBirthDay = function getBirthDay() {
  return +new Date() - this.age;
}

var human = new Human(0, {
  fname: 'no',
  lname: 'name'
});
