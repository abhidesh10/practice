let smallNum = input_stdin_array[0];
let largeNum = input_stdin_array[0];
for (let i = 0; i < input_stdin_array.length; i++) {
  for (let j = i; j < input_stdin_array.length; j++) {
    if (input_stdin_array[j] > largeNum) {
      largeNum = input_stdin_array[j];
      console.log("largeNum", largeNum, input_stdin_array[j]);
    }

    if (!(smallNum < input_stdin_array[j])) {
      console.log("smallNum", smallNum, input_stdin_array[j]);
      smallNum = input_stdin_array[j];
    }
  }
}
