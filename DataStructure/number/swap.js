function swap(first, second) {
  console.log(`Before swapping : first = ${first} , second = ${second}`);
  first = first + second;
  second = first - second;
  first = first - second;

  return `Before swapping : first = ${first} , second = ${second}`;
}

console.log(swap(5, 3));
