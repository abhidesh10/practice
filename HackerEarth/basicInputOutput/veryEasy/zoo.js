// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding("utf-8");

// Prompt user to input data in console.
console.log("Please input text in command line.");

// When user input data and click enter key.
standard_input.on("data", function(data) {
  console.log("*************\n");
  data = data.toLowerCase();
  let Z = 0,
    O = 0;
  for (let i = 0; i < data.length; i++) {
    const C = data[i];
    if (C === "z") Z++;
    if (C === "o") O++;
  }

  console.log(Z, O, Z, O / 2);
  if (Z === O / 2) return console.log("YES");
  console.log("NO");
});
