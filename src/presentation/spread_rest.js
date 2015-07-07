function makeWrapper(func, ...firsts) {
  return function(...params) {
    func(...firsts, ...params);
  };
}

let func = makeWrapper((...params) => console.log(...params), 1, 2);

func(3, 4); // 1 2 3 4

let arr = [1, 2, 3, 4, 5, 6];

let newArr = [0, ...arr, 7];
