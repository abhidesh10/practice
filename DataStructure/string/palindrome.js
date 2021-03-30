// Using for loop
let checkPalindrome = str => {
  let len = str.length;
  for (let i = 0; (len = i < len / 2); i++) {
    if (str[i] != str.charAt(len / 2 - (i + 1))) return false;
  }
  return true;
};

// console.log(checkPalindrome("racecar"));

// Usong build in function
let checkPalindrome2 = str => {
  let reverseString = str
    .split("")
    .reverse()
    .join("");

  if (str == reverseString) return true;
  return false;
};

// console.log(checkPalindrome2("aabaabaa"));

let checkPalindrome3 = str => {
  let regex = /[^A-Za-z0-9]/g;
  let lowRegStr = str.toLowerCase().replace(regex, "");
  let reverseStr = lowRegStr
    .split("")
    .reverse()
    .join("");

  return lowRegStr === reverseStr;
};

// console.log(checkPalindrome3("0_0 (: /- :) 0–0"));

// Using for loop
let checkPalindrome4 = str => {
  let regex = /[^A-Za-z0-9]/g;
  let lowRegStr = str.toLowerCase().replace(regex, "");
  let len = lowRegStr.length;

  for (var i = 0; i < len / 2; i++) {
    if (lowRegStr[i] != lowRegStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(checkPalindrome4("A man, a plan, a canal. Panama"));
