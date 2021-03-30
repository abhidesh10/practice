/* Reverse string */

// Using Build-in functions
function reverseString(str) {
  return str
    .split(" ")
    .reverse()
    .join(" ");
}

/* Reverse string using decrementing for loop*/
function reverseString2(str) {
  let newString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

/* Recursion */
// function reverseString3(str) {
//   return str === "" ? "" : reverseString3(str.substr(1)) + str.charAt(0);
// }

function reverseString3(str) {
  return str === "" ? "" : reverseString3(str.substr(1)) + str.charAt(0);
}

console.log(reverseString3("Abhijit Subhash Deshmukh"));
