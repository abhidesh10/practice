function SimpleSymbols(str) { 
    
    let tmp = str.replace(/[^A-z]/g, '');
    let find = str.match(/\+[A-z]\+/g);
    
    return (tmp.length == find.length ? true : false);     
}
// console.log(SimpleSymbols("+D+=3=+s+"));

function AlphabetSoup(str) { 

    return str.split('').sort().join('').replace(/\s+/g, '');    
}

// keep this function call here 
// console.log(AlphabetSoup('bcde1z2eoartfy'));

let globalLet = "This is a global variable"; 
   
function fun() { 
  let globalLet = "This is a local variable"; 
  console.log('inside',globalLet); // This is a global variable
} 
fun(); 
console.log('outside',globalLet); // This is a global variable
