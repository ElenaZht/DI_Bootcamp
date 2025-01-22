// Create a promise that resolves itself in 4 
// seconds and returns a “success” string.
const myPromise = new Promise((res, rej) => {
    setTimeout(() => res('success'), 4000)
})
myPromise
  .then(result => console.log(result)) // Logs the resolved value ('success') after 4 seconds
  .catch(error => console.log(error));
