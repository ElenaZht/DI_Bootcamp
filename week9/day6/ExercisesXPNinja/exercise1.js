// Analyze the code below, what will be the output?
class Bird {  // declaration of class, each instanciation invokes console log
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird { // declaration of child class
  constructor() {
    console.log("I'm pink. 🌸"); // each instanciation invokes console log
    super(); // calling parent constructor
  }
}

const pet = new Flamingo(); //instanciation
// *Answer: 2 console.logs:
//I'm pink. 🌸
//I'm a bird. 🦢
// *Output: 
// I'm pink. 🌸
// I'm a bird. 🦢