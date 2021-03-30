let markMass = 10;
let markHeight = 165;
let johnMass = 20;
let johnHeight = 140;

let markBMI = (markMass / markHeight * markHeight);
let johnBMI = (johnMass / johnHeight * johnHeight);
let x = (markMass / markHeight);
let y = x * markHeight;

console.log(x, y, markMass / markHeight, (markMass / markHeight * markHeight), markMass / (markHeight * markHeight));

console.log("Is Mark BMI is greter then John BMI", markBMI > johnBMI);