async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 2000);
  });
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 2000);
  });
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 2000);
  });
  
  let result = await promise; // wait until the promise resolves (*)
  console.log("1st 3s wait");
  console.log(result);
  let result1 = await promise1; // wait until the promise resolves (*)
  console.log("2nd 3s wait");
  console.log(result1);
  let result2 = await promise2; // wait until the promise resolves (*)
  console.log("3rd 3s wait");
  console.log(result2);
  console.log("Await ok");

  Promise.all([promise,promise1,promise2])
  .then((a) => console.log("final"))
  .catch((e) => console.log(e))

  console.log("Promise ok");
}

f();
