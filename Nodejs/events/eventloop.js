function abc() {
  return "not waiting";
}

console.log("A");
setTimeout(function display() {
  console.log("Wait 3000s");
}, 3000);

setTimeout(function display() {
  console.log("BBBBB");
}, 0);

setTimeout(function display() {
  console.log("2000s wait");
}, 2000);

console.log("C");
console.log(abc());
