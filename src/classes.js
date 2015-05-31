class Fury {
  post = 'cop';
  static style = 'epic';
  static print() {
    return 'hello from Fury';
  }
}

for(let prop in Fury) log(prop, ' : ', Fury[prop]); // print style

var fury = new Fury();

for(let prop in fury) log(prop, ' : ', fury[prop]); // print only post

log('fury.style: ', fury.style); // undefined

class Kung extends Fury {
  name = 'Jhon';
  lname = 'Fury';

  toString() {
    return `My name is ${this.name} ${this.lname}, and i am a ${this.post}`;
  }

  static print() {
    return `${super.print()} and from Kung`;
  }
}

log('Kung.style: ', Kung.style); // print epic

var kung = new Kung();

log('kung.style: ', kung.style); // print undefined

log("" + kung); // toString

log(Fury.print());
log(Kung.print());
// log(kung.print()); // error, no method print in object.

function log(...args){
  console.log(...args, '\n');
}
