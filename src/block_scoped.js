let bsVar = 'world';

console.log(foo());

{
  let bsVar = 'hello';

  console.log(foo());

  {
    const bsVal = 'cosnting';
    // bsVal = 'unconst'; // error when compiling
    // if make lib, of course have a "problem
  }

  console.log(bsVar);

  function foo() {
    return 'from jail';
  }
}

function foo() {
  return 'from out';
}

console.log(bsVar);
