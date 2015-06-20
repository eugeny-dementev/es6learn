import miniEmitter from './lib/emitter.js';
import Log from './lib/logger.js';
import _ from 'lodash';

var handler = new miniEmitter,
    logger = new Log(console.log);

handler.on('h', () => logger.log('miniEmitter is alive!!!!11'));

handler.emit('h');

_.map([1, 2, 3], elem => console.log(elem));

