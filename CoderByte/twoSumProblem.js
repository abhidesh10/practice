function twoSum1(arr, sum) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    const firstElm = arr[i];
    // console.log("firstElm", i, firstElm);

    for (let j = i + 1; j < arr.length; j++) {
      const secondElm = arr[j];
      //   console.log("secondElm", j, secondElm);
      if (firstElm + secondElm === sum) finalArr.push([firstElm, secondElm]);
    }
    // console.log("!!!!!!!!!!!!!!!!");
  }
  console.log(finalArr);
}

twoSum1([3, 5, 2, -4, 8, 11], 7);

console.log("##########################");

function twoSum(arr, S) {
  var sums = [];
  var hashTable = {};

  // check each element in array
  for (var i = 0; i < arr.length; i++) {
    // calculate S - current element
    var sumMinusElement = S - arr[i];

    // check if this number exists in hash table
    // if so then we found a pair of numbers that sum to S
    if (hashTable[sumMinusElement.toString()] !== undefined) {
      sums.push([arr[i], sumMinusElement]);
    }

    // add the current number to the hash table
    hashTable[arr[i].toString()] = arr[i];
  }

  // return all pairs of integers that sum to S
  return sums;
}

console.log(twoSum([3, 5, 2, -4, 8, 11], 7));
