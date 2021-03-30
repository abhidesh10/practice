console.log("***** Solution : 1 *****");

let includesDouble = arr => {
  for (let i = 0; i < arr.length; i++) {
    const elementOuter = arr[i];
    for (let j = 1; j < arr.length; j++) {
      const elementInner = arr[j];
      if (elementOuter * 2 === elementInner) return true;
    }
  }
  return false;
};

console.log(includesDouble([3, 4, 60]));

console.log("***** Solution : 2 *****");

let includesDouble2 = arr => {
  let i = 0;

  while (i < arr.length) {
    if (arr.includes(arr[i] * 2)) return true;
    i++;
  }
  return false;
};

console.log(includesDouble2([3, 4, 60]));

console.log("***** Solution : 3 *****");

let includesDouble3 = arr => {
  let double = {};
  let i = 0;

  while (i < arr.length) {
    double[arr[i]] = "cats" + arr[i];

    if (double[arr[i] * 2] || double[arr[i] / 2]) return true;
    i++;
  }
  return false;
};

console.log(includesDouble3([3, 4, 6]));
