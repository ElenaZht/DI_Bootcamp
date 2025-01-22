// 1. Use Promise.resolve(value) to create a promise 
// that will resolve itself with a value of 3.
const resolvedPromise = Promise.resolve(3);
resolvedPromise.then(value => console.log(value)); // 3

// 2. Use Promise.reject(error) to create a promise 
// that will reject itself with the string “Boo!”
const rejectedPromise = Promise.reject('Boo!');
rejectedPromise.then(result => console.log(value))
.catch((result) => console.log(result)); // Boo!