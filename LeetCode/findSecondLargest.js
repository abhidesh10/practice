let secondLargest = (array) => {

    let first = array[0];
    let second = array[0];
    let third = array[0];

    for (let i = 1; i < array.length; i++) {
        // console.log("*******" + i +"\t"+ array[i] +"*******");
        
        // if (array[i] > first) {
        //     third = second;
        //     second = first;
        //     first = array[i];
        //     console.log("1st","num",array[i], "first",first,"second",second,"third",third);

        // } else if (array[i] > second && array[i] != first) {
        //     third = second;
        //     second = array[i]
        // console.log("2nd","num",array[i], first,"second",second,"third",third);

        // } else if (array[i] < second && array[i] > third) {
        //     third = array[i]
        // console.log("3rd","num",array[i],first,"second",second,"third",third);

        // }

        if (array[i] > first) {
            third = second;
            second = first;
            first = array[i];
        } else if (array[i] > second && array[i] != first) {
            third = second;
            second = array[i];
        } else if (array > third && array[i] != first && array[i] != second) {
            third = array[i]
        }
    }
    console.log("first",first,"second",second,"third",third);

}

secondLargest([25, 26, 7, 8, 10, 11, 79])