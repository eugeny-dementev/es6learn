print(true);
print();

defObj();
defArr();
defSpreadArr();

function print(print = false) {
  if (print) console.log('print is true');
}

function defObj({date, count} = {date: new Date(), count: 0}) {
  console.log(`date is ${date} and count is ${count}`);
}

function defArr([date, count] = [new Date(), 0]) {
  console.log(`date is ${date} and count is ${count}`);
}

function defSpreadArr([...params] = [1, 2, 3]) {
  console.log(`params is ${params}`);
}
