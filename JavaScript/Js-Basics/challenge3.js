function tipCalculator(billAmount) {
    if (billAmount < 50) return billAmount * 0.2
    if (billAmount <= 200) return billAmount * 0.15
    if (billAmount > 200) return billAmount * 0.1
}

let tips = [];
let finalPaid = [500,49,150];

for (let i = 0; i < finalPaid.length; i++) {
    tips.push(tipCalculator(finalPaid[i]));
}

console.log('Tips for bills', tips);
console.log('Tips for bills and amount', tips, finalPaid);
