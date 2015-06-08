var map = new Map();

map.set('one', 1);
map.set('two', 2);
map.set('tre', 3);

for (let set of map)
  console.log('map set:', set);

for (let [key, val] of map)
  console.log(`map key: ${key} and value: ${val}`);

var entries = map.entries();
var iterator = map[Symbol.iterator]();

console.log('entries obj:', entries); // iterator, looks like empty obj
console.log('iterator obj:', iterator); // another iterator
console.log('compare of it and ent:', iterator == entries);
console.log('entries.next func:', entries.next); // but method exist of course

var val = {helo: 'hello'};

/*
 * WeakMap uses link on object only for keys.
 * this need for observe value memory place and
 * make possible to delete it if by GC if no other links in code
 */

var weakMap = new WeakMap();

weakMap.set(val, val);

console.log('weakMap size before func:', weakMap.length);
checkWeakness();
console.log('weakMap size after func:', weakMap.length);

function checkWeakness() {
  var value = {obj: {hello: 'hello'}};
  weakMap.set(value, value);
  console.log('weakMap size in func:', weakMap.length);
}

/*
 * Set like a filter for repeating
 * Any value can be in with only one time.
 */

var set = new Set();
set.add('val');
set.add('val');
set.add('lav');
set.add('val');

console.log(...set); // and like many in es6, collection can be iterate
