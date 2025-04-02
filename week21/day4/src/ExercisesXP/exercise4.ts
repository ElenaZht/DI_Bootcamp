// Create a class Calculator with the following static methods:

// add(a: number, b: number): number – returns the sum of two numbers.
// subtract(a: number, b: number): number – returns the difference 
// between two numbers.
// Call these methods without creating an instance of the class.
class Calculator{
    static add(a: number, b: number): number {
        return a + b
    }

    static subtract(a: number, b: number): number {
        return a - b
    }
}

console.log(Calculator.add(2, 3)) // 5
console.log(Calculator.subtract(5, 3)) // 2

const calculator = new  Calculator()
calculator.add(1, 2) // Property 'add' does not exist on type 'Calculator'
// static methods nor accessable outside if the class or subclass