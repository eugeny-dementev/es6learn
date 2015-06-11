/**
 * rest operator ... is awesome
 */


// get all params
function all(...params) {
  console.log('all params:', ...params);
}

// get last params
function rest(first, ...params) {
  console.log(`first: ${first} and others:`, ...params);
}

// all except last
// function callback(...params, callback) {} // unfortunaly this dont work :(
