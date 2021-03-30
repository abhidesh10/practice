function main(input) {
  //Enter your code here
  var arr = input.split("\n");
  process.stdout.write(JSON.stringify(arr));
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function(input) {
  stdin_input += input;
});

process.stdin.on("end", function() {
  main(stdin_input);
});
