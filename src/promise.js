let promise = new Promise((resolve, reject) => { // if define, babel use native
  let result = 'result';
  resolve(result);
});

promise.then(result => console.log(result));
