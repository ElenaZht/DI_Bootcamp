// Define a type Employee that combines Person and Job using 
// intersection types. Create a function describeEmployee 
// that takes an Employee object and uses type guards to 
// return a description based on whether the Job is a Manager 
// or a Developer.

// Person type: name: string; age: number;
// Job type: position: string; department: string;
// Employee type should combine these.
// describeEmployee should return a specific message for each type of job.

type PersonType = {
    name: string; 
    age: number;
}

type JobType = {
    position: string; 
    department: string;
}

type EmployeeType = PersonType & JobType

const describeEmployee = (obj: EmployeeType): string => {
    if (obj.position === 'Manager'){
        return `${obj.name} is a good Manager`
    }
    if (obj.position === 'Developer'){
        return `${obj.name} is a professional Developer`
    } 
    return `${obj.name} is on unknown position`
}

const emp1: EmployeeType = {
    name: 'Joe',
    age: 23, 
    position: 'Developer',
    department: 'WebSecurity'
}

const emp2: EmployeeType = {
    name: 'Jill',
    age: 29, 
    position: 'Manager',
    department: 'WebSecurity'
}

const emp3: EmployeeType = {
    name: 'Bill',
    age: 39, 
    position: 'Cleaner',
    department: 'WebSecurity'
}

console.log(describeEmployee(emp1))
console.log(describeEmployee(emp2))
console.log(describeEmployee(emp3))