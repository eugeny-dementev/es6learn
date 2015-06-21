var elements = [
  'storage',
  'api',
  'xhr'
];

var components = {};

for (let element of elements) {
  Object.defineProperty(components, element, {
    get() {
      this['_' + element] = this['_' + element] || {};
      return this['_' + element];
    },
    set() {},
    configurable: false,
    enumerable: true
  });
}

var {storage, api} = components;

console.log(Object.keys(components)); // only

