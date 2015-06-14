print(true);
print();

defObj();

function print(print = false) {
  if (print) console.log('print is true');
}

function defObj({date, count} = {date: new Date(), count: 0}) {
  console.log(`date is ${date} and count is ${count}`);
}
