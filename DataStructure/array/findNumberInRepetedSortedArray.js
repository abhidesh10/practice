let sortedWithReaptedNumber = (arr, n, x) => {
    let left = -1;
    let right = n;

    while (right > left + 1) {
        mid = Math.ceil((right + left) / 2);

        if (arr[mid] < x) {
            left = mid;
            console.log("IF", "LEFT", left, "RIGHT", right);
        } else {
            right = mid;
            console.log("Else", "RIGHT", right, "LEFT", left);
        }
    }

    if (right < n && arr[mid] === x) {
        console.log("Index is : ", mid);
        return
    }

    console.log("Index is : ", -1);
}

sortedWithReaptedNumber([2,3,5,6,6,6,6,8,9], 9, 6)