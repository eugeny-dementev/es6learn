import handler from './classes.js';

var elem = (hello) => {
  console.log(hello);
}

elem('hello from labmda ;)');
elem(handler);

handler.on('h', () => console.log('hello'));

handler.emit('h');

