// Find Given Number From Array

let traditionalWay = (array, target) => {
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            console.log("Index", i, "Target", array[i]);
            return
        }

        console.log("Index Not Found", i, "Target", array[i]);
    }
    console.log("TARGET NOT PRESENT IN ARRAY");
};

let binarySearch = (array, target) => {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.ceil((left + right) / 2)
        if (array[mid] === target) {
            console.log("GET THE TARGET : ", array[mid]);
            return
        } else if (array[mid] < target) {
            console.log("INSIDE ELSE IF : ", array[mid], left, right);
            left = mid + 1;
        } else {
            console.log("INSIDE ELSE : ", array[mid], left, right);
            right = mid - 1;
        }
    }
    console.log("TARGET NOT PRESENT IN ARRAY");
}

console.time('Function #1');

// let array =  Array.apply(null, {length: 10}).map(Number.call, Number);
// let array =  [...Array(10).keys()];
// let array =  Array.from(Array(10).keys());
let array =  Array.from({length: 1000000}, (_, i) => i + 1);

// traditionalWay(array, 1000)
binarySearch(array, 1000)

console.timeEnd('Function #1')