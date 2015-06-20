print(true);
print();

defObj();
defArr();
defRestArr();
defPartRestArr();

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
  console.log(`rest is ${rest}`);
}
