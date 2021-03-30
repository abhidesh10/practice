let arr = [3, 5, 1, 0, 2, 0, 3, 0, 2, 2, 2, 5];

let newArr = arr.filter((f, i) => arr.indexOf(f) === i);
console.log(newArr);
