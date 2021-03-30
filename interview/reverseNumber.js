let reverse = function (num) {
    let revNum = 0;
    while(num) {
        let lastDigit = (num % 10);
        console.log("lastDigit",lastDigit);
        
        revNum = (revNum * 10) + lastDigit;
        console.log("revNum",revNum);

        console.log(num/10, num/10|0);
        
        num = num/10|0
    }
    return revNum;
}
console.log(reverse(12345678912123));
