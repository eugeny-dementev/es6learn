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
