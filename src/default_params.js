print(true);
print();

defObj();
defArr();
defRestArr();
defRestArr([1, 2]);
defPartRestArr();
defPartRestArr([1, 2]);
defCalc('online');

function print(print = false) {
  if (print) console.log('print is true');
}

function defObj({date, count} = {date: new Date(), count: 0}) {
  console.log(`date is ${date} and count is ${count}`);
}

function defArr([date, count] = [new Date(), 0]) {
  console.log(`date is ${date} and count is ${count}`);
}

function defRestArr([...rest] = [1, 2, 3]) {
  console.log(`rest is ${rest}`);
}

function defPartRestArr([first, second, ...rest] = [1, 2, 3, 4]) {
  console.log(`rest is ${rest.length}`);
}

function defCalc(module, file = module, path = `/${module}/${file}`) {
  console.log(`module ${module}, file ${file}, path ${path}`);
}
// unpossible :(
// function defReversePartRestArr([...rest, last] = [1, 2, 3]) {
//   console.log(`rest is ${rest}`);
// }
