console.log("Start");

function asynchronousOperation(callback) {
  setTimeout(function () {
    console.log("Async Operation");
    callback();
  }, 1000);
}

asynchronousOperation(function () {
  console.log("Callback executed");
});

console.log("End");
