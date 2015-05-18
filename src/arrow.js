import Logger from './lib/logger'

var log = new Logger(console.log);

var arr = [1, 'hello', {hello: 'help'}];

arr.map(elem => log.log(elem));

arr.map((elem, ind, arr) => log.log(elem === arr[ind]));

log.log(() => {}.toString()); // correct view, or transpiling?

() => {log.log('exec lambda expr')}(); // it wooooorks! :D
() => log.log('exec lambda expr')(); // well, this of course not correct
// function() {log.log('exec func expr')}(); // don't compiles

var foo = () => {
  let elems = () => log.log(this.name); // this converts to undefined
  elems();
};
var mock = {};
mock.obj = {
  name: 'babi',
  arr: [1, 2],
  foo,
  Foo: () => {
    let elems = () => log.log(this.name); // this converts to undefined
  },
  fOO: () => {
    let self = this; // this converts to undefined
    let elems = () => log.log(self.name); // well, use lambdas this like totaly bad idea
  },
  FOO() { // with this type 'this' works fine
    let elems = () => log.log(this.name);
    elems();

    let second = () => {
      let inner = () => {
        log.log(this.name);
      }
      inner();
    }
    second();
  }
};

Object.keys(mock.obj).map(function (elem, ind, arr) {log.log(this.obj.name, elem, ind)}, mock);
// Object.keys(mock.obj).map((elem, ind, arr) => log.log(this.obj.name), mock); // this replaced with undefined


// mock.obj.foo(); // property of undefined error
// mock.obj.Foo(); // same

mock.obj.FOO();

