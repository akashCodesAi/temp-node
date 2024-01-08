const promise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      const success = true; // Set this to false to simulate a failure
  
      if (success) {
        resolve("Here's your data!"); // The promise is fulfilled (successful)
      } else {
        reject("Oops, something went wrong!"); // The promise is rejected (unsuccessful)
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
  
  // Using the promise
  promise
    .then((result) => {
      console.log("Success:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  