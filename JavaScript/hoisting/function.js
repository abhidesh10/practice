console.log("***** Question 1 *****");

function hoistExample() {
  var a;
  console.log("Before: ", a);
  a = 10;
  console.log("After: ", a);
}
hoistExample();

console.log("***** Question 2 *****");

function hoistingExample() {
  console.log("Value of b in local scope: ", b);
}
console.log("Value of b in global scope: ", b);
var b = 1;
hoistingExample();

console.log("***** Question 3 *****");

function hoistingExample3() {
  c = 1;
}
hoistingExample3();
console.log(c);

console.log("***** Question 4 *****");

function hoistingExample4() {
  var d = 1;
}
hoistingExample4();
// console.log(d);

console.log("***** Question 5 *****");

function hoistingExample5() {
  console.log("1");
}
hoistingExample5();
function hoistingExample5() {
  console.log("2");
}
hoistingExample5();

console.log("***** Important Question 6 *****");

var test = 1;
function hoistingExample6() {
  test = 10;
  return;
  function test() {}
}
hoistingExample6();
console.log(test);

console.log("***** Question 7 *****");
console.log(hoistingExample7());
function hoistingExample7() {
  var b = function () {
    return 3;
  };
  return b();
  var b = function () {
    return 8;
  };
}

console.log("***** Question 8 *****");
console.log(hoistingExample8());

function hoistingExample8() {
  function b() {
    return 3;
  }
  return b();
  function b() {
    return 8;
  }
}

console.log("***** Important Question 9 *****");

function parent() {
  var hoisted = "I'm a variable";
  function hoisted() {
    return "I'm a function";
  }
  return hoisted();
}
// console.log(parent());

console.log("***** Important Question 10 *****");

function hoistingExample10() {}
var hoistingExample10;
console.log(hoistingExample10);

var hoistingExample101;
function hoistingExample101() {}
console.log(hoistingExample101);

console.log("***** Question 11 *****");
var myVar = "foo";
(function () {
  console.log("Original value was: " + myVar);
  var myVar = "bar";
  console.log("New value is: " + myVar);
})();
