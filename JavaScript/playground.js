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
    for (let i = 0; i < n; i++) {
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

