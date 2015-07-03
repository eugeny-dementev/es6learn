let promise = new Promise((resolve, reject) => {
  let result = 'result';
  resolve(result);
});

promise.then(result => console.log(result));
