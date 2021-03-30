let primeNumber = num => {
  if (num <= 1) return `${num} Is Not A Prime Number`;

  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) return `${num} Is Not A Prime Number`;
  }

  return `${num} Is A Prime Number`;
};

console.log(primeNumber(43));
