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

function* oneTwoThree() {
  yield *[1, 2, 3];
};

function spreadArgs(...params) {
  // spread between others arguments
  console.log('values:', ...params, '.');
}

