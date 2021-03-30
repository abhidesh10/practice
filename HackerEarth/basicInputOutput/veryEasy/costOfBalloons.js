// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input; // Reading input from STDIN
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  input = input.split("\n");
  let testCase = Number(input[0]);

  let i = 0;
  while (testCase > 0) {
    i++;
    let ballons = input[i].split(" ").map((n) => Number(n));
    if (i === 13) {
      ballons[0] = ballons[0] + ballons[1];
      ballons[1] = ballons[0] - ballons[1];
      ballons[0] = ballons[0] - ballons[1];
    }

    i++;
    let contestent = Number(input[i]);

    let costOfBallon = 0;
    while (contestent) {
      i++;
      let result = input[i].split(" ").map((n) => Number(n));
      if (result[0] === 1) costOfBallon += ballons[0];
      if (result[1] === 1) costOfBallon += ballons[1];
      contestent--;
    }
    console.log(costOfBallon);
    testCase--;
  }

  // process.stdout.write(input );       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here
