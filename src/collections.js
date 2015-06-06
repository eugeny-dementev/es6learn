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
