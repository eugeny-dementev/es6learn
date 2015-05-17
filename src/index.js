import miniEmitter from './lib/emitter.js';
import Logger from './lib/logger.js';

var handler = new miniEmitter,
    logger = new Logger(console.log);

handler.on('h', () => logger.log('miniEmitter is alive!!!!11'));

handler.emit('h');

