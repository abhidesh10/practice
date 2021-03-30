function flipInt(n) {
  var digit,
    result = 0;

  while (n) {
    digit = n % 10; //  Get last digit. Ex. 123/10 → 12.3 → 3

    result = result * 10 + digit; //  Ex. 123 → 1230 + 4 → 1234
    console.log("Remove last digit", n / 10, (n / 10) | 0);

    n = (n / 10) | 0; //  Remove last digit. Ex. 123 → 12.3 → 12
    console.log("n", n);
  }

  return result;
}

// Usage:
console.log(flipInt(123));
