var iterable = { // iterable object is any object with [Symbol.iterator] method.
  // this method must return
  [Symbol.iterator]() {
    // We can create it by just write method [Symbol.iterator] in any object,
    // and result of this method must be a object with methods next and optional return, throw.
    // In babel throw dont work (need to check)
    let i = 0,
      done = false;
    return {
      next() {
        if (i > 10) done = true;
        return { done, value: i++ };
      },
      return() {
        done = true;
        return { done };
      }
    }
  },
  hello: 'hello'
};

Number.prototype[Symbol.iterator] = function getIterator(step = 1) {
  var top = +this,
    itr = (top > 0 ? 1 : -1) * step,
    cur = 0 - itr;

  return {
    next() {
      return {
        done: cur === top,
        value: cur += itr
      };
    },
    return() {
      cur = top;
      return { done: true };
    }
  }
};

console.log('numbers:', [...3]);

var iterator = iterable[Symbol.iterator]();
// [Symbol.iterator] must return object with method next()
// and optional methods return() and throw().
// this object named iterator

for (let prop in iterator)
  console.log(prop); // Symbol is enumerable property

for (let prop in iterator) // and its own property
  if (iterator.hasOwnProperty(prop)) console.log(prop);

for (let i of iterable) {
  console.log('value: ', i);
  if (i > 4) break;
}

console.log([...iterable]);
