let disks = (diskArray) => {
	// let diskArray = input_stdin_array.map((disk) => Number(disk));
    let k,n,t,max,min,flag; 
    // n = diskArray[0];
    n = diskArray.length;
     
    if (n === 0 || n == diskArray[1]) {
        n = -1;
        // process.stdout.write(""+n+"\n");
        console.log(n);
        return 
    } 
         
    t = max = n; 
    console.log("T", t, "MAX", max, "N", n, "Array", diskArray); 
    for (let i = 1; i < n; i++) {
        console.log("Main for loop => ", i, diskArray[i], n);
        if (diskArray[i] > max) {
            console.log("If num greater then max : ", diskArray[i], max);
            max=diskArray[i]; 
            console.log("Max : ", max);
        }
     
        if (max > n) {
            console.log("Inside Main If => Max greater then n : ", max, n);
            k = 1; 
            min = max; 
            console.log("K : ", k, "Max : ", max, "Min : ", min);
            for (let i = 1; i <= max; i++) { 
                flag = 0; 
                console.log("First for loop => ", i, max, flag);
                for(let j = 0; j < n; j++) { 
                    console.log("Second for loop => ", j, diskArray[j]);
                    if (diskArray[j] === i) { 
                        diskArray[j] = k; 
                        flag = 1; 
                        console.log("Second for condition match => ", diskArray[j]);
                    } 
                } 

                if (flag === 1) {
                    k++; 
                    console.log("If flag value 1 then k => ", k);
                } 
            } 
         
            for (let i = n-1; i >= 0; i--) {
                console.log("Last for loop => ", i, diskArray[i], t);
                if (diskArray[i] === t) {
                    t--; 
                    console.log("Last for condition match => ", t);
                }
            }
        } 
        else { 
            for (let i = n - 1; i >= 0; i--) {
                console.log("Inside Main Else => ", i, diskArray[i], t);
                if (diskArray[i] === t) {
                    t--; 
                    console.log("If number eq to t ", t);
                }
            }
        } 
        console.log("*************************");
    } 

// process.stdout.write(""+t+"\n");
console.log(t);
return;
    
};

disks([1,5,2,3,10,4,9,6,8,7])


/*

T 10 MAX 10 N 10 Array [
  10, 1, 5, 2, 3,
  10, 4, 9, 6, 8,
   7
]
Main for loop =>  1 1 10
Inside Main Else =>  9 8 10
Inside Main Else =>  8 6 10
Inside Main Else =>  7 9 10
Inside Main Else =>  6 4 10
Inside Main Else =>  5 10 10
If number eq to t  9
Inside Main Else =>  4 3 9
Inside Main Else =>  3 2 9
Inside Main Else =>  2 5 9
Inside Main Else =>  1 1 9
Inside Main Else =>  0 10 9
*************************
Main for loop =>  2 5 10
Inside Main Else =>  9 8 9
Inside Main Else =>  8 6 9
Inside Main Else =>  7 9 9
If number eq to t  8
Inside Main Else =>  6 4 8
Inside Main Else =>  5 10 8
Inside Main Else =>  4 3 8
Inside Main Else =>  3 2 8
Inside Main Else =>  2 5 8
Inside Main Else =>  1 1 8
Inside Main Else =>  0 10 8
*************************
Main for loop =>  3 2 10
Inside Main Else =>  9 8 8
If number eq to t  7
Inside Main Else =>  8 6 7
Inside Main Else =>  7 9 7
Inside Main Else =>  6 4 7
Inside Main Else =>  5 10 7
Inside Main Else =>  4 3 7
Inside Main Else =>  3 2 7
Inside Main Else =>  2 5 7
Inside Main Else =>  1 1 7
Inside Main Else =>  0 10 7
*************************
Main for loop =>  4 3 10
Inside Main Else =>  9 8 7
Inside Main Else =>  8 6 7
Inside Main Else =>  7 9 7
Inside Main Else =>  6 4 7
Inside Main Else =>  5 10 7
Inside Main Else =>  4 3 7
Inside Main Else =>  3 2 7
Inside Main Else =>  2 5 7
Inside Main Else =>  1 1 7
Inside Main Else =>  0 10 7
*************************
Main for loop =>  5 10 10
Inside Main Else =>  9 8 7
Inside Main Else =>  8 6 7
Inside Main Else =>  7 9 7
Inside Main Else =>  6 4 7
Inside Main Else =>  5 10 7
Inside Main Else =>  4 3 7
Inside Main Else =>  3 2 7
Inside Main Else =>  2 5 7
Inside Main Else =>  1 1 7
Inside Main Else =>  0 10 7
*************************
Main for loop =>  6 4 10
Inside Main Else =>  9 8 7
Inside Main Else =>  8 6 7
Inside Main Else =>  7 9 7
Inside Main Else =>  6 4 7
Inside Main Else =>  5 10 7
Inside Main Else =>  4 3 7
Inside Main Else =>  3 2 7
Inside Main Else =>  2 5 7
Inside Main Else =>  1 1 7
Inside Main Else =>  0 10 7
*************************
Main for loop =>  7 9 10
Inside Main Else =>  9 8 7
Inside Main Else =>  8 6 7
Inside Main Else =>  7 9 7
Inside Main Else =>  6 4 7
Inside Main Else =>  5 10 7
Inside Main Else =>  4 3 7
Inside Main Else =>  3 2 7
Inside Main Else =>  2 5 7
Inside Main Else =>  1 1 7
Inside Main Else =>  0 10 7
*************************
Main for loop =>  8 6 10
Inside Main Else =>  9 8 7
Inside Main Else =>  8 6 7
Inside Main Else =>  7 9 7
Inside Main Else =>  6 4 7
Inside Main Else =>  5 10 7
Inside Main Else =>  4 3 7
Inside Main Else =>  3 2 7
Inside Main Else =>  2 5 7
Inside Main Else =>  1 1 7
Inside Main Else =>  0 10 7
*************************
Main for loop =>  9 8 10
Inside Main Else =>  9 8 7
Inside Main Else =>  8 6 7
Inside Main Else =>  7 9 7
Inside Main Else =>  6 4 7
Inside Main Else =>  5 10 7
Inside Main Else =>  4 3 7
Inside Main Else =>  3 2 7
Inside Main Else =>  2 5 7
Inside Main Else =>  1 1 7
Inside Main Else =>  0 10 7
*************************
7


//////////////////////////// ATTEMP 2////////////////////////////////

T 10 MAX 10 N 10 Array [
  1, 5, 2, 3, 10,
  4, 9, 6, 8,  7
]
Main for loop =>  0 1 10
Inside Main Else =>  9 7 10
Inside Main Else =>  8 8 10
Inside Main Else =>  7 6 10
Inside Main Else =>  6 9 10
Inside Main Else =>  5 4 10
Inside Main Else =>  4 10 10
If number eq to t  9
Inside Main Else =>  3 3 9
Inside Main Else =>  2 2 9
Inside Main Else =>  1 5 9
Inside Main Else =>  0 1 9
*************************
Main for loop =>  1 5 10
Inside Main Else =>  9 7 9
Inside Main Else =>  8 8 9
Inside Main Else =>  7 6 9
Inside Main Else =>  6 9 9
If number eq to t  8
Inside Main Else =>  5 4 8
Inside Main Else =>  4 10 8
Inside Main Else =>  3 3 8
Inside Main Else =>  2 2 8
Inside Main Else =>  1 5 8
Inside Main Else =>  0 1 8
*************************
Main for loop =>  2 2 10
Inside Main Else =>  9 7 8
Inside Main Else =>  8 8 8
If number eq to t  7
Inside Main Else =>  7 6 7
Inside Main Else =>  6 9 7
Inside Main Else =>  5 4 7
Inside Main Else =>  4 10 7
Inside Main Else =>  3 3 7
Inside Main Else =>  2 2 7
Inside Main Else =>  1 5 7
Inside Main Else =>  0 1 7
*************************
Main for loop =>  3 3 10
Inside Main Else =>  9 7 7
If number eq to t  6
Inside Main Else =>  8 8 6
Inside Main Else =>  7 6 6
If number eq to t  5
Inside Main Else =>  6 9 5
Inside Main Else =>  5 4 5
Inside Main Else =>  4 10 5
Inside Main Else =>  3 3 5
Inside Main Else =>  2 2 5
Inside Main Else =>  1 5 5
If number eq to t  4
Inside Main Else =>  0 1 4
*************************
Main for loop =>  4 10 10
Inside Main Else =>  9 7 4
Inside Main Else =>  8 8 4
Inside Main Else =>  7 6 4
Inside Main Else =>  6 9 4
Inside Main Else =>  5 4 4
If number eq to t  3
Inside Main Else =>  4 10 3
Inside Main Else =>  3 3 3
If number eq to t  2
Inside Main Else =>  2 2 2
If number eq to t  1
Inside Main Else =>  1 5 1
Inside Main Else =>  0 1 1
If number eq to t  0
*************************
Main for loop =>  5 4 10
Inside Main Else =>  9 7 0
Inside Main Else =>  8 8 0
Inside Main Else =>  7 6 0
Inside Main Else =>  6 9 0
Inside Main Else =>  5 4 0
Inside Main Else =>  4 10 0
Inside Main Else =>  3 3 0
Inside Main Else =>  2 2 0
Inside Main Else =>  1 5 0
Inside Main Else =>  0 1 0
*************************
Main for loop =>  6 9 10
Inside Main Else =>  9 7 0
Inside Main Else =>  8 8 0
Inside Main Else =>  7 6 0
Inside Main Else =>  6 9 0
Inside Main Else =>  5 4 0
Inside Main Else =>  4 10 0
Inside Main Else =>  3 3 0
Inside Main Else =>  2 2 0
Inside Main Else =>  1 5 0
Inside Main Else =>  0 1 0
*************************
Main for loop =>  7 6 10
Inside Main Else =>  9 7 0
Inside Main Else =>  8 8 0
Inside Main Else =>  7 6 0
Inside Main Else =>  6 9 0
Inside Main Else =>  5 4 0
Inside Main Else =>  4 10 0
Inside Main Else =>  3 3 0
Inside Main Else =>  2 2 0
Inside Main Else =>  1 5 0
Inside Main Else =>  0 1 0
*************************
Main for loop =>  8 8 10
Inside Main Else =>  9 7 0
Inside Main Else =>  8 8 0
Inside Main Else =>  7 6 0
Inside Main Else =>  6 9 0
Inside Main Else =>  5 4 0
Inside Main Else =>  4 10 0
Inside Main Else =>  3 3 0
Inside Main Else =>  2 2 0
Inside Main Else =>  1 5 0
Inside Main Else =>  0 1 0
*************************
Main for loop =>  9 7 10
Inside Main Else =>  9 7 0
Inside Main Else =>  8 8 0
Inside Main Else =>  7 6 0
Inside Main Else =>  6 9 0
Inside Main Else =>  5 4 0
Inside Main Else =>  4 10 0
Inside Main Else =>  3 3 0
Inside Main Else =>  2 2 0
Inside Main Else =>  1 5 0
Inside Main Else =>  0 1 0
*************************
0





*/
