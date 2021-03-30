let array = arr => {
  let notUnique = [];
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    const firstVal = arr[i];
    // console.log("i :", i);
    if (uniqueArr.length > 1) return uniqueArr;
    if (notUnique.indexOf(firstVal) > -1) continue;

    loop1: for (let j = i + 1; j < arr.length; j++) {
      const secondVal = arr[j];
      // console.log("j :", j);

      if (firstVal === secondVal) {
        // console.log("firstVal", firstVal, "secondVal", secondVal);

        notUnique.push(firstVal);
        break loop1;
      }
      // console.log("***** J loop *******");
    }
    // console.log("***** I loop *******");
    if (notUnique.indexOf(firstVal) == -1) uniqueArr.push(firstVal);
  }
  return uniqueArr;
};

// array([1, 1, 2, 2, 3, 3, 4, 5, 5, 2, 1, 3, 6]);
// console.log(array([1, 1, 2, 3, 2, 3]));
// array([1, 1, 2, 3, 2, 3]);
console.log(array([1, 3, 5, 5, 7, 1, 2, 9]));
