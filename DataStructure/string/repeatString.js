//   Using while loop
let repeatString = (str, num) => {
  let returnStr = "";

  while (num > 0) {
    returnStr += str + " ";
    num--;
  }

  return returnStr;
};

// console.log(repeatString1("abc", 3));

// Using for loop
let repeatString1 = (str, num) => {
  let returnStr = "";

  for (let i = 0; i < num; i++) {
    returnStr += str + " ";
  }
  return returnStr;
};

// console.log(repeatString1("abc", 3));

// Using recursion
let repeatString2 = (str, num) => {
  if (num < 0) return "";
  if (num === 1) {
    return str;
  } else {
    return str + " " + repeatString2(str, num - 1);
  }
};

// console.log(repeatString2("x", 3));

// Repeat a String using ES6 repeat() method

let repeatString3 = (str, times) => {
  if (times > 0) {
    return str.repeat(times);
  } else {
    return "";
  }
};

console.log(repeatString3("x", 2));
