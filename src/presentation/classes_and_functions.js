function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function toString() {
  return 'x: ' + this.x + ', y: ' + this.y;
};

class superPoint extends Point {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }

  toString() {
    return `${super.toString()}, z: ${this.z}`;
  }
}

let point = new superPoint(10, 10, 10);

console.log('' + point); // x: 10, y: 10, z: 10


