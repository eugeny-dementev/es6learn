var arr = [1, 2, 3, 4, 6, 7];

arg(...arr); // .apply

function arg() {
  console.log(arguments::[].slice(2)); // .call
}
