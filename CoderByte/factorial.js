// /* Factorial */
// function factorial(num = 1) {
//   return num === 0 || typeof num != Number ? 1 : num * factorial(num - 1);
// }
// console.log(factorial("as"));

function fact(num = 1) {
  return num == 0 ? 1 : num * fact(num - 1);
}

console.log(fact());
