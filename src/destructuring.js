var arr = [1, 'string', [1, 3, 2]];
var obj = {num: 2, str: 'new string', arr: [2, 3, 1]};
var {num, str, arr} = obj;

print();

// printArgs(...obj); // dont work, to much magic

spreadArr(...arr); // spread operator is lovely

/*
 * destructuring OBJECT assignment supports only with creation of variables
 *
 * this wrong:
 *
 *  var num, str;
 *  {num, str} = {num: 1, str: ''};
 */

var n, s;
[n, s] = [1, 'hel'];
console.log('n and s:', n , s);

function print() {
  printObj({num, str, arr});
}

function spreadArr(num, str, arr) {
  printObj({num, str, arr});
}

function printObj({num, str, arr}) {
  console.log('num: ', num);
  console.log('str: ', str);
  console.log('arr: ', arr);
}
