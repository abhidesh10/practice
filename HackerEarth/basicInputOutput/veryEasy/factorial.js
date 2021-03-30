let factorial = (num = 1) => {
  let fact = num < 1 ? 1 : factorial(num - 1) * num;
  return fact;
};

console.log(factorial());
