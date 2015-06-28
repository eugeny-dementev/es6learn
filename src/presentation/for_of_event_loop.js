

'use strict';

for (let i = 0; i < 1000; i++) {
  setTimeout(print, 0, i, 'from setTimeout');
}

for (let i of generator()) {
  console.log(i, 'from generator');
}

function print(i, message) {
  console.log(message, i);
}

function *generator() {
  for (let i = 0; i < 1000; i++) {
    yield i;
  }
}




