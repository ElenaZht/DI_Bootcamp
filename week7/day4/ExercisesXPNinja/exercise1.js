// Create two objects, each object should hold a person’s details. 
// Here are the details:
// FullName
// Mass
// Height

// Each object should also have a key which value is a 
// function (ie. A method), that calculates the Body 
// Mass Index (BMI) of each person

// Outside of the objects, create a JS function that compares 
// the BMI of both objects.

// Display the name of the person who has the largest BMI.
class Person{
    constructor(name, mass, height){
        this.name = name
        this.mass = mass
        this.height = height
    }
    bodyMassIndex(){
        return this.mass / this.height ^ 2
    }
}

function theBiggest(per1, per2){
    if (per1.bodyMassIndex >= per2.bodyMassIndex){
        return per1.name
    } else {
        return per2.name
    }
}

const lena = new Person('elena zht', 92, 1.66)
const dima = new Person('dima zht', 90, 1.66)
console.log(theBiggest(lena, dima))