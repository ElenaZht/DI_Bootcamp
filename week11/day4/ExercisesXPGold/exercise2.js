// Analyse the code below - what will be the output ?

function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2)); // returns promise that resolves with x*2
}

const arr = [1, 2, 3]; // array of numbers
const promiseArr = arr.map(timesTwoAsync); // array of promises with values from arr array

Promise.all(promiseArr) // Promise.all gets array of promises 
// and resolves with one promise(res if all res, rej if even 1 rej)
  .then(result => {
    console.log(result); 
  });
// prediction: undefined, because no res defined in promise.all

// output: [ 2, 4, 6 ], The code works as expected because Promise.all 
// resolves with a single promise that, when fulfilled, provides an array 
// of the resolved values of the input promises.