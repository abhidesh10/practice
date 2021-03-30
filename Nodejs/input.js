// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding("utf-8");

// Prompt user to input data in console.
console.log("Please input text in command line.");

// When user input data and click enter key.
standard_input.on("data", function(data) {
  // User input exit.
  if (data === "exit\n") {
    // Program exit.
    console.log("User input complete, program exit.");
    process.exit();
  } else {
    let details = data.split(" ");
    let a = Number(details[0]);
    let b = Number(details[1]);
    // Print user input in console.
    console.log(a + b);
  }
});
