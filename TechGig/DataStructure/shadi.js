let arr = (n) => {
  console.log(n);
  let count = 0;
  for (let i = 1; i < n.length; i++) {
    let largeNum = n[i];

    let index = 0;
    for (let j = i + 1; j < n.length; j++) {
      if (n[j] > largeNum) {
        index = j;
        largeNum = n[j];
      }
    }
    if (largeNum != n[i]) {
      n[index] = n[i];
      n[i] = largeNum;
      count++;
    }
  }
  console.log("count", count === 0 ? -1 : count);
};

arr("3,1,4,3,5,2".split(",").map((n) => Number(n)));
