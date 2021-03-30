let countDivisors = (l, r, k) => {
  let count = 0;

  for (let i = l; i <= r; i++) {
    if (i % k === 0) {
      console.log(i, l, r, k);
      count++;
    }
  }
  return count;
};

console.log(countDivisors(1, 10, 2));
