//Create a class Employee with the following properties:
// A private property name of type string.
// A private property salary of type number.
// A public property position of type string.
// A protected property department of type string.
// Also, include a constructor to initialize these properties. 
// Create a public method getEmployeeInfo that returns the 
// employee’s name and position.

class Employee{
    constructor(
        private name: string,
        private salary: number,
        public position: string, 
        protected department: string
    ){}
    public getEmployeeInfo(){
        return `${this.name} works as ${this.position}`
    }
}

const employee = new Employee('Dima', 40000, 'architect', 'plaxidityX')
console.log(employee.getEmployeeInfo())