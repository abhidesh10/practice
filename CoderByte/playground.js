let a = 5;
let b = 10;
let c = 15;

let testIf = () => {

  if (a === 5) {
    console.log('ok A');
    return
  }

  if (b === 10) {
    console.log('ok B');
    return
  }

  if (a === 15) {
    console.log('ok C');
    return
  }

}

testIf()