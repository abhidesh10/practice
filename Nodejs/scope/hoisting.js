var shape = "circle";

function getShape(condition) {
  // shape exists here with a value of undefined
  // OUTPUT : undefined
  console.log(shape);
  if (condition) {
    let shape = "square";
    console.log("inside if", shape);

    // some other code
    return shape;
  } else {
    // shape exists here with a value of undefined
    return false;
  }
}

console.log(getShape(true));
console.log(shape);
