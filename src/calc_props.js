var _ = require('lodash');

var val = 'name';
var getter = 'getter';

var obj = {
  [val + 1]() {
    return 'hello world';
  },
  get [getter]() {
    return 'getter hello';
  }
};

console.log(obj[val + 1]());
console.log(obj['getter']);
console.log(obj.getter);


