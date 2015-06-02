var itarable = (for (x of [1, 2, 3]) x + 1); // support in es7 mode (generator comprehensions) stage 0 babel
console.log('itarable obj: ', itarable); // return object of regeneratorRuntime lib, have only method _invoke (iterable object)
for (let num of itarable) console.log('num of = ', num);

var newArray = [for (x of [1, 2, 3]) x - 1]; // support in es7 mode (generator comprehensions) stage 0
console.log('newArray obj: ', newArray); // just array of results
for (let num of newArray) console.log('num of = ', num);

function* generalor() {
  // this function* returns function with constructor function property.
  // exec of this function return iterable object with methods: next, throw, return and symbol object.
  // (but in babel return special object wrapper of regeneratorRuntime lib with only _invoke method)
  // for-of operator use this interface.
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}; // need to exec for get itarable object

console.log('generalor geenerator function: ', generalor); // function with every execute return new iterable object

let iterable = generalor();

console.log('iterable obj, result of generalor: ', iterable);

for (let x of iterable) console.log(x);

// infinity irerable

let ii = function* () {
  let i = 0;
  while (true) yield i++;
}();


console.log(ii.next()); // return object {value: 0, done: false} - done is sign to stop iterate.

console.log(ii.next(400)); // not the same as python, for example. just return {value: 1, done: false}

console.log(ii.next()); // return object {value: 2, done: false}

console.log(ii.return()); // return object {value: undefined, done: true} // in babel

var pleaseDontStop = 5
for(let i of ii) // will never execute, because return() method executed before.
  if (pleaseDontStop--)
    console.log('value:', i);
  else break;

var iter = {
  [Symbol.iterator]: function* () {
    var i = 0;
    while (true) yield i++;
  }
}

console.log('iter obj:', iter); // looks like empty obj, have only [Sybmol.iterator] method really.
console.log('iter.[Symbol.iterator]() result:', iter[Symbol.iterator]()); // return regeneratorRuntime lib wrapper

pleaseDontStop = 5;
for (let i of iter)
  if (pleaseDontStop--)
    console.log('iter value' + i);
  else break; // break will exec return() method of iterable object
