let findSecondLargest = (arr) => {
    if (arr.length <= 2) return "Length less then 2"

    let first = second = third = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i]
        } else if (arr[i] > second && arr[i] != first) {
            second = arr[i]
        }

        // Find third largest element
        // else if (arr[i] > third && arr[i] != second && arr[i] != first) {
        //     third = arr[i]
        // }
    }

    return `First ${first} Second ${second} Third ${third}`
}

// let num = [40, 100, 1, 55, 25, 10, 50];

console.log(findSecondLargest(num));