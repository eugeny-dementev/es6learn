var arr = [1, 2, 3, 4, 6, 7];

arg(...arr); // .apply

arr::function() {
  // callbacks are douchbags, sidebacks our future :D :crazy:
  arg(...this::[].slice(2));
}();

function arg() {
  console.log(arguments::[].slice(2)); // .call
}
