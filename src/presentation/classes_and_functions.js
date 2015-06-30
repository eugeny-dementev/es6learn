function Point(x, y) {
  this.x = x;
  this.y = y;
}

class superPoint extends Point {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }
}

let point = new superPoint(10, 10, 10);

console.log(point);
