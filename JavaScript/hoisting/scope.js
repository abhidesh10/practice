console.log("***** Question 1 *****");

(function blockScopeExample() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function logValue() {
      console.log(i); //5.
    }, 100);
  }
})();

console.log("***** Question 2 *****");

const arr = [11, 22, 33, 44];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log("Index: " + i + ", element: " + arr[i]);
  }, 3000);
}
