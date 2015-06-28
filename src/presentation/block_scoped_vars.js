'use strict';

let val = 'out';

{
  console.log(val);

  let val = 'in';
  {
    console.log(val);

    let val = 'super in'
  }
}
