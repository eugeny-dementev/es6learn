class Handler {
  constructor(init) {
    init(this);
  }
}

var hand = new Handler(handler => {
  handler.listeners = {};
  handler.on = (type, fun) => {
    handler.listeners[type] = fun;
  }
  handler.emit = (type, ...args) => {
    handler.listeners[type](...args);
  }
});

export default hand;

