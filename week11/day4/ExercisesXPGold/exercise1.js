// Use the Promise.all that will accept the 3 promises below.
// The method should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.
// Explain in a comment how Promise.all work and why you receive this output.

const promise1 = Promise.resolve(3); // immediately resolves value
const promise2 = 42; // ordinary variable, not a promise
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
}); // resolves value 'foo' after 3 sec

Promise.all([promise1, promise2, promise3])
    .then(resolvedValues => console.log(resolvedValues))
    .catch(rejectedPromise => console.log(rejectedPromise))

// expected output: Array [3, 42, "foo"]
// output: [ 3, 42, 'foo' ]