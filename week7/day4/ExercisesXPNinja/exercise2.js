// Create a function called findAvg(gradesList) that takes an argument 
// called gradesList.

// Your function must calculate and console.log the average.

// If the average is above 65 let the user know they passed

// If the average is below 65 let the user know they failed and must 
// repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.
function findAvg(gradesList){
    const everage = gradesList.reduce((acc, gr) => acc + gr) / gradesList.length
    console.log('everage ', everage)
    return everage
}

function isPassed(gradesList){
    if (findAvg(gradesList) > 65){
        console.log('u passed')
    } else {
        console.log('u failed, start this course again')
    }
}

const gradesList = [12, 70, 99, 50, 88]
const gradesList2 = [92, 77, 99, 96, 88]

console.log(isPassed(gradesList))
console.log(isPassed(gradesList2))