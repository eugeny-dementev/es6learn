var obj = {
  hello: 'hello'
};

var prop = {
  [obj]: 'helo'
};

var obj2 = {
  hello: 'hello'
};

console.log(prop[obj2]); // wow! this print 'helo' "D

// and little about shorthand

var lamda = () => console.log('hello from lamda');

var shorthand = {
  obj,
  obj2,
  prop,
  lamda,
  helo() {
    console.log(this.prop[this.obj], this.prop[this.obj] == this.prop[this.obj2]);
  }
}

shorthand.helo();
