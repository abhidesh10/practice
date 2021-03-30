// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding("utf-8");

// let palindromOrNot = str => {
//   for (let i = 0; i < str.length - 1; i++) {
//     const C = str[i];
//     // console.log(i, str.length, str.charAt(i), str.charAt(str.length - 2 - i));
//     // console.log("*********************");

//     if (C === str.charAt(str.length - 2 - i)) {
//       continue;
//     } else {
//       return "NO";
//     }
//   }
//   return "YES";
// };

standard_input.on("data", str => {
  for (let i = 0; i < str.length - 1; i++) {
    const C = str[i];

    if (C != str.charAt(str.length - 1 - i)) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
});
