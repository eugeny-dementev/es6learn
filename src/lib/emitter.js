import Any from './any.js';

class miniEmitter extends Any {
  constructor() {
    super(handler => {
      handler.listeners = {};
      handler.on = (type, fun) => {
        handler.listeners[type] = fun;
      }
      handler.emit = (type, ...args) => {
        handler.listeners[type](...args);
      }
    });
  }
}

export default miniEmitter;

