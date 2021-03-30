let iArray = [1, 3, 4, 5, 6];
let missing = getMissingNumber(iArray, iArray.length + 1);
console.log(missing, iArray.length);

// console.log("Missing number in array %s is %d %n", 
// Arrays.toString(iArray), missing);

function getMissingNumber(numbers, totalCount) {
    
    let expectedSum = totalCount * ((totalCount + 1) / 2); 
    let actualSum = 0; 
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        actualSum += element;
    }
    console.log(expectedSum,actualSum);
    
    return expectedSum - actualSum; 
}
