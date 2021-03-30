// synchronous

[1, 2, 3, 4].forEach(i => {
  console.log(i);
});

// Asyn

function asynFun(array, cb) {
  array.forEach(() => {
    setTimeout(cb, 0);
  });
}

asynFun([1, 2, 3, 4], function(i) {
  console.log("asynFun", i);
});
