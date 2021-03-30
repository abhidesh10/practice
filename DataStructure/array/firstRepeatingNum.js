let firstRepNum = "";
let findFirstRepNum = array => {
  for (let i = 0; i < array.length; i++) {
    const num = array[i];

    for (let j = i + 1; j < array.length; j++) {
      const num2 = array[j];

      if (num == num2) {
        return (firstRepNum = num);
        firstRepNum.push(num);
      }
    }
  }
  //   return firstRepNum;
};

console.log(findFirstRepNum([11, 3, 5, 1, 6, 17, 10, 7]));
