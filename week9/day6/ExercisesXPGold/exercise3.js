// Analyze the code below, what will be the output?
class Counter {  //declarating Counter class with count property defined to 0
  constructor() {
    this.count = 0;
  }

  increment() { //declarating class method that increments count by 1 each call
    this.count++;
  }
}

const counterOne = new Counter(); //creating new Counter class instance
counterOne.increment(); // calling class method - count = 1
counterOne.increment(); // calling class method - count = 2

const counterTwo = counterOne; //creating variable points to class inctance counterOne
counterTwo.increment(); // calling class method - count = 3, because counterTwo points to counterOne

console.log(counterOne.count); // Output(should be 3): 3