// Callback example
function fetchData(callback) {
    setTimeout(() => {
      callback("Data fetched!");
    }, 3000);
  }
  
  fetchData((result) => {
    console.log(result);
  });
  