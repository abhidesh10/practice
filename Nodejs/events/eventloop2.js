function main() {
  console.log("A");
  setTimeout(function exec() {
    console.log("B");
  }, 0);
  runWhileLoopForNSeconds(3);
  console.log("C");
}
main();
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  console.log(start, now, sec * 1000);

  while (now - start < sec * 1000) {
    now = Date.now();
    // console.log("inside", now);
  }
  console.log("now", now);
}
