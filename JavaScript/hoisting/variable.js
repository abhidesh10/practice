console.log("***** Question 1 *****");

var variable = 10;

(() => {
  console.log(variable);
  var variable = 20;
  //   let variable = 20;
  console.log(variable);
})();

console.log("***** Question 2 *****");

var variable = 30;
(() => {
  console.log("Inside func", variable); // undefined
  variable = 40;
  console.log("Inside func", variable); // 20
})();

console.log("Outside func", variable);

console.log("***** Question 3 *****");

var variable = 50;
(() => {
  console.log(variable); // undefined
  variable = 60;
  console.log(variable); // 20
})();
var variable = 70;
console.log(variable);

console.log("***** Question 4 *****");

var variable = 10;
(() => {
  console.log(variable); // undefined
  var variable = 20;
  console.log(variable); // 20
})();

console.log(variable);
var variable = 30;

console.log("***** Question 5 *****");

var variable = 10;
(() => {
  console.log(variable); // undefined
  variable = 20;
  console.log(variable); // 20
})();

console.log(variable);
var variable = 30;

console.log("***** Question 6 *****");

var variable = 10;
(() => {
  variable_3 = 35;
  console.log(variable_3);
  var variable_3 = 45;
  variable_2 = 15;
  console.log(variable); // 20
})();

console.log(variable_2);
// console.log(variable_3);
var variable = 30;
