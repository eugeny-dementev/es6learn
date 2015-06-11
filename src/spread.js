/**
 * spread operator ... have big pack possibilities
 */

var args = [1, 2, 3];

// spread array to function params
spreadArgs(...args);

// spread iterator
spreadArgs(...oneTwoThree());

// spread iterator into array
args = [...oneTwoThree()];
spreadArgs(...args);

// spread array between other array values
args = [0, ...args, 4]
spreadArgs(...args);

// partial spread to function
partialSpread(...[1, 2, 3], err => ::console.log(err));

function* oneTwoThree() {
  yield *[1, 2, 3];
};

function partialSpread(err, req, res, next) {
  console.log(...arguments);
  console.log([...arguments]);
}

function spreadArgs(...params) {
  // spread between others arguments
  console.log('values:', ...params, '.');
}

