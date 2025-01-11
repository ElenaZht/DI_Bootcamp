// Analyze the code below. What will be the output?
class Person { // definition of new class with property name
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John'); // instanceation of an object of class Person
console.log(typeof member); // displaying type of the instance - "object class Persone"
// *Output: "object"