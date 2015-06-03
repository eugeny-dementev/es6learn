var iterator = (for (x of [1, 2, 3]) x + 1); // support in es7 mode (generator comprehensions) stage 0 babel
console.log('iterator obj: ', iterator); // return object of regeneratorRuntime lib, have only method _invoke (iterator object)
for (let num of iterator) console.log('num of = ', num);

var newArray = [for (x of [1, 2, 3]) x - 1]; // support in es7 mode (generator comprehensions) stage 0
console.log('newArray obj: ', newArray); // just array of results
for (let num of newArray) console.log('num of = ', num);

function* generator() {
  // this function* returns function with constructor function property.
  // exec of this function return iterator object with methods: next, throw, return and symbol object.
  // (but in babel return special object wrapper of regeneratorRuntime lib with only _invoke method)
  // for-of operator use this interface.
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
} // need to exec for get iterator object

console.log('generator geenerator function: ', generator); // function with every execute return new iteratorFromGen object

var iteratorFromGen = generator();

console.log('iterator obj, result of generator: ', iteratorFromGen);

for (let x of iteratorFromGen) console.log(x);

// infinity iterator

let ii = function* () {
  let i = 0;
  while (true) yield i++;
}();


console.log(ii.next()); // return object {value: 0, done: false} - done is sign to stop iterate.
console.log(ii.next(400)); // not the same as python, just return {value: 1, done: false}, of course we can make own behaviour
console.log(ii.next()); // return object {value: 2, done: false}
console.log(ii.return()); // return object {value: undefined, done: true} // in babel

var pleaseDontStop = 5;
for (let i of ii) // will never execute, because return() method executed before.
  if (pleaseDontStop--)
    console.log('value:', i);
  else break;

var iterable = {
  // object with [Symbol.iterator] method named iterable object,
  // for-or loop work with him different, every time we make for-of loop creates new iterator object.
  [Symbol.iterator]: function* () {
    var i = 0;
    while (i < 5) yield i++;
  }
};

console.log('iterable obj:', iterable); // looks like empty obj, have only [Sybmol.iterator] method really.
console.log('iterable[Symbol.iterator]() result:', iterable[Symbol.iterator]()); // return regeneratorRuntime lib wrapper

for (let i of iterable) // make iterator
  console.log('first iterate:', i);

var iii = iterable[Symbol.iterator]();
for (let i of iii) { // make another one iterator
  console.log('second iterate:', i);
  if (i > 1) break; // this invoke return method
}
// and after break iii.next return "{done: true}"
console.log('iii.next():', iii.next());
