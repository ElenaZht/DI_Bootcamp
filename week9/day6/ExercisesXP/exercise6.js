// *1. Evaluate these (ie True or False)

// [2] === [2] // false, because every array in js is separate entity that has it's own memory address
// {} === {} // false, same situasion, different memory locations

// *2. What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
 // Answer: 4, object2 is reference of object1
 // Output: 4
console.log(object3.number)
 // Answer: 4, object3 is reference of object1
 // Output: 4
console.log(object4.number)
 // Answer: 5, object4 is separate object
 // Output: 5



//  *Create a class Animal with the attributes name, type and color. 
// The type is the animal type, for example: dog, cat, dolphin etc …
class Animal{
    constructor(name, type, color){
        this.name = name
        this.type = type
        this.color = color
    }
}

// *Create a class Mammal that extends from the Animal class. 
// Inside the class, add a method called sound(). This method takes a parameter: 
// the sound the animal makes, and returns the details of the animal 
// (name, type and color) as well as the sound it makes.
class Mammal extends Animal{
    constructor(name, type, color, animalSound){
        super(name, type, color)
        this.animalSound = animalSound
    }

    sound(){
        return `The ${this.type} named ${this.name} is of ${this.color} color and sais "${this.animalSound}"`
    }
}
// *Create a farmerCow object that is an instance of the class Mammal. 
// The object accepts a name, a type and a color and calls the sound method 
// that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white
const farmerCow = new Mammal('Lily', 'cow', 'brown', 'moos!')
console.log(farmerCow.sound()) // The cow named Lily is of brown color and sais "moos!"
