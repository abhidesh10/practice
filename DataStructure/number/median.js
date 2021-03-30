function median(values) {
  values.sort(function(a, b) {
    return a - b;
  });
  console.log("values", values);
  console.log("valuesLength", values.length);

  var half = Math.floor(values.length / 2);
  console.log("half", half);

  if (values.length % 2) return values[half];
  else return (values[half - 1] + values[half]) / 2.0;
}

console.log(median([1, 2, 3, 4]));
console.log(median([1, 2, 3, 4, 5]));
