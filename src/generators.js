// var itarable = (for (x of [1, 2, 3]) x + 1); // support in es7 mode (generator comprehensions)
// var newArray = [for (x of [1, 2, 3]) x + 1]; // support in es7 mode (generator comprehensions)

let iterable = function* () {
  // this function * returns function with constructor function property.
  // exec of this function return iterable object with methods: next, throw, return and symbon object.
  // for-of operator use this interface.
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}(); // need to exec for get itarable object

for (let x of iterable) console.log(x);

// infinity irerable

let ii = function* () {
  let i = 0;
  while (true) yield i++;
}();


console.log(ii.next()); // return object {value: 1, done: false} - done is sign to stop iterate.

console.log(ii.next(400));

console.log(ii.next());

var pleaseDontStop = 5
for(let i of ii) if (pleaseDontStop--) console.log('value' + i); else break;

var iter = {
  [Symbol.iterator]: function* () {
    var i = 0;
    while (true) yield i++;
  }
}

pleaseDontStop = 5;
for (let i of iter) if (pleaseDontStop--) console.log('iter value' + i); else break;
