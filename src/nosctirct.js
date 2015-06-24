// if i use non-strict "feature"

showThis();

function showThis() {
  // no strict file, but
  // after babel this === undefined
  console.log('this', this);
  // Possible problems if your code is gavno
}
