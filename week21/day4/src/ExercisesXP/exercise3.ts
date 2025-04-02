// Create a base class Animal with 
// a public property name and 
// a method makeSound that returns a string. 
// Create a subclass Dog that extends Animal 
// and overrides the makeSound method to return 
// the sound a dog makes (“bark”). Create an 
// instance of the Dog class and call the makeSound method.

class Animal{
    constructor(
        public name: string,

    ){}

    makeSound(){
        return `${this.name} sais Rrrr!`
    }
}

class Dog extends Animal{
    constructor(public name: string){
        super(name)
    }
    makeSound(){
        return `${this.name} sais Bark!`
    }
}

const myDog = new Dog('Barly')
console.log(myDog.makeSound())