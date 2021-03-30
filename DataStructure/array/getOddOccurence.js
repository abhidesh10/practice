let getOddOccurrence = (arr, n) => {
    
    for (let i = 0; i < arr.length; i++) {
        
        
        let count = 0; 
        for (let j = 0; j < arr.length; j++) {
            
            if (arr[i] == arr[j]) 
            count++; 
        }
        console.log('count',count);
        
        if (count % 2 != 0) 
        return arr[i]; 
    }	 
    return -1; 
    
}
const arr = [2, 3, 5, 4, 5, 2, 4, 3, 5, 2, 4, 4, 2 ]; 
const n = arr.length; 
console.log(getOddOccurrence(arr, n));
// This code has been contributed by Kamal Rawal 
