// var [num, str, arr] = [1, 'string', [1, 3, 2]];
var {num, str, arr} = {num: 2, str: 'new string', arr: [2, 3, 1]};

print();

/*
 * destructuring support only with creation of variables
 *
 * this wrong:
 *
 *  var num, str;
 *  [num, str] = [1, ''];
 *  {num, str} = {num: 1, str: ''};
 */

function print() {
  printObj({num, str, arr});
}

function printObj({num, str, arr}) {
  console.log('num: ', num);
  console.log('str: ', str);
  console.log('arr: ', arr);
}
