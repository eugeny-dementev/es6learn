var iterator = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        return { done: i < 5 ? false : true, value: i++ };
      }
    }
  },
  hello: 'hello'
};

for (let prop in iterator)
  console.log(prop); // Symbol is enumerable property

for (let prop in iterator) // and its own property
  if (iterator.hasOwnProperty(prop)) console.log(prop);

console.log(iterator);

for (let i of iterator) console.log('value: ', i);
