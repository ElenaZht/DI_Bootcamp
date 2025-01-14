//Line up the Turtle and the Rabbit at the start line.

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

let spacesTillLine = 0
for (let c of startLine){
    if (c === "|") break
    spacesTillLine++
}

turtle = ' '.repeat(spacesTillLine + 2) + turtle
rabbit = ' '.repeat(spacesTillLine + 2) + rabbit

console.log(startLine);
console.log(turtle);
console.log(rabbit);

// What happens when you run turtle = turtle.trim().padEnd(9, '='); ?
turtle = turtle.trim().padEnd(9, '=') // trim() removes white spaces at both sides of the string
//padEnd() is new js method that adds required amount of string argument to the end of the string
console.log(turtle) // 🐢=======

