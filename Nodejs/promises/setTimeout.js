// A simple promise that resolves after a given time

const timeOut = t => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completed in ${t}`);
    }, t);
  });
};

// Resolving a normal promise.
timeOut(1000).then(result => console.log(result)); // Completed in 1000

// Promise.all
Promise.all([timeOut(500), timeOut(500)]).then(result => console.log(result)); // ["Completed in 1000", "Completed in 2000"]
