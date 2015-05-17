import Any from './any.js'

class Logger extends Any {
  constructor(logFunc) {
    super(logger => {
      logger.log = (...args) => logFunc(...args);
    });
  }
}

export default Logger;

