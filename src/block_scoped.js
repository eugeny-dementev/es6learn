let bsVar = 'world';

{
  let bsVar = 'hello';

  console.log(bsVar);
  console.log('\b');

  {
    const bsVal = 'cosnting';
    // bsVal = 'unconst'; // error when compiling
    // if make lib, of course have a "problem
  }
}

console.log(bsVar);
