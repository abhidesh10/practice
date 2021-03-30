let index = -1;
let str = (s) => {
  let newStr = s.split("");

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== "a") {
      index = i;

      continue;
    }
    if (newStr[i] === "a" && index > -1) {
      newStr[i] = newStr[index];
      newStr[index] = "a";
      index = -1;
    }
  }
  return newStr.join("");
};

console.log(str("ababacada"));
