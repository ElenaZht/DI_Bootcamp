// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
//Analyze the options below. Which constructor will successfully extend the Dog class?

  // 1
class Labrador extends Dog { 
    constructor(name, size) { // property name provided but not used, missing super() method
      this.size = size;
    }
  };
  // *Output: ReferenceError: Must call super constructor in derived class before accessing 
  // 'this' or returning from derived constructor
    
  
  // 2
class Labrador extends Dog {
    constructor(name, size) { // correctly extends parent class with all properties
      super(name);
      this.size = size;
    }
  };
  // *Output: Labrador {name: "Rex", size: 5}
  
  
    // 3
  class Labrador extends Dog {
    constructor(size) { // property name not provided so it is undefined
      super(name);
      this.size = size;
    }
  };
  // *Output:  Unexpected use of 'name', Labrador {name: "", size: 5}
  
  
    // 4
  class Labrador extends Dog {
    constructor(name, size) { // there is no issue, but name property here is a new child's property, not realization of the parent property
      this.name = name;
      this.size = size;
    }
  };
  // *Output: ReferenceError: Must call super constructor in derived class before accessing 
  // 'this' or returning from derived constructor