// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function(input) {
  stdin_input += input; // Reading input from STDIN
});

process.stdin.on("end", function() {
  main(stdin_input);
});

function main(input) {
  var multiLine = input.split("\n");

  let numArray = multiLine[1].split(" ");
  let str = "";

  for (let i = 0; i < numArray.length; i++) {
    for (let j = 1; j <= numArray[i]; j++) {
      const num = j;
      let strName = "";

      if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz", num);
        strName = "FizzBuzz";
      } else if (num % 3 === 0) {
        console.log("Fizz", num);

        strName = "Fizz";
      } else if (num % 5 === 0) {
        console.log("Buzz", num);

        strName = "Buzz";
      } else {
        console.log("number", num);

        strName = i;
      }

      str += strName + "\n";
    }
  }

  //   console.log(str);

  //   process.stdout.write("Hi, " + input + ".\n"); // Writing output to STDOUT
}

// Write your code here
