function reverseStr(str) {
  // Using reverse for loop
  //   let newStr = "";

  //   for (let i = str.length - 1; i >= 0; i--) {
  //     newStr += str[i];
  //   }

  //   Using build in methods
  //   let newStr = str
  //     .split(" ")
  //     .reverse()
  //     .join(" ");

  //   Using recursion
  return str === "" ? "" : reverseStr(str.substr(1)) + str.charAt(0);
}

console.log(reverseStr("Abhijit Deshmukh"));
