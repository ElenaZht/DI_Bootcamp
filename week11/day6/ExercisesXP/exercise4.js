// Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() { // callback function
    return new Promise(resolve => { // that returns promise which resolves with 'resolved' 
                                    // string in 2sec delay
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() { // asynchronous function
    console.log('calling');
    let result = await resolveAfter2Seconds(); // code wait for resolveAfter2Seconds resulve
    console.log(result);
}

asyncCall();

// there is nothing in callback function that can cause an error so the promise will allways resolved
// *predictable output:
//  calling
//  resolved

// *real output:
// calling
// Promise {<pending>}
// resolved