class Mapnik extends Map {
  constructor(...args) {
    super(...args);
    this.map = new Map();
  }

  get(key, callback = null) {
    if (!callback) {
      return super.get(key);
    }

    let promise = this._getPromise(key);

    if (promise) {
      promise.then(callback);
    }
  }

  set(key, value) {
    let alreadySet = this.has(key);

    super.set(key, value);

    let promise = this._getPromise(key, value);
  }

  _getPromise(key, value = null) {
    let promise = null;

    promise = this.map.has(key) ? this.map.get(key) : makeNewOne();

    if (value) {
      resolver(promise, value);
    }

    if (!this.map.has(key)) {
      this.map.set(key, promise);
    }

    return promise;

    function makeNewOne() {
      let resolver = null;

      let promise = new Promise(resolve => resolver = resolve);

      promise.resolve = resolver;

      return promise;
    }

    function resolver(promise, value) {
      if (promise.resolve) promise.resolve(value);
      delete promise.resolve;
    }
  }
}

let kot = new Mapnik();

kot.get('key', value => console.log(value));

console.log('after get key');

kot.set('key', 'hello');

console.log('after set key');

console.log('before set koy');
kot.set('koy', 'world');

console.log('before get koy');
console.log('koy:', kot.get('koy'));

