function helloworld() {
  for (let x = 0; x < 2; x++) {}

  // x is out of the scope here
  console.log(x); // x is not defined
}
helloworld();
