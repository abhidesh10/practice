let sortArr = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            
            console.log("i",i,"j",j,"value",arr[i],arr[j]);            
        }
        console.log("***********");
    }
}

sortArr([2,1,29,4,43])