function SimpleAdding(num) { 
    // let value = 0;
    // while (num != 0) {
    //     value += num
    //     num--
    // }
    // return value

    return (num === 1 || num === 0 ? 1 : num + SimpleAdding(num -1))
}
   
console.log(SimpleAdding(0));