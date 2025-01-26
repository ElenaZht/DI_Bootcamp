// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.
function evenInRandomInterval(){
    const randNum = Math.floor(Math.random() * 100)
    console.log('interval from 0 to ', randNum)
    for (let n = 0; n <= randNum; n++){
        if (n%2 === 0){
            console.log(n)
        }
    }
}
console.log(evenInRandomInterval())