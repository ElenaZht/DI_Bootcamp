// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two 
// nested for loops (Nested means one inside the other - check out this 
// tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *
function drawStars(num){
    let star = '*'

    for(let i = 1; i <= num; i++){
        console.log(star.repeat(i))
    }
}

drawStars(0) //nothing
drawStars(1) //one star
drawStars(6) //like example
drawStars(-1) //nothing

function drawStars2(num){
    let star = '*'

    for(let i = 1; i <= num; i++){
        let row = ''
        for(let j = 1; j <= i; j++){
            row += star
        }
        console.log(row)
    }
}

drawStars2(6)