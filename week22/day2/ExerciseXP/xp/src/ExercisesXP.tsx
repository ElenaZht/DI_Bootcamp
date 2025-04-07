import React from 'react'

export default function ExercisesXP() {

    /** Exercise 1 */
    // Create a TypeScript program that logs the message “Hello, World!” to the console.
    console.log('Hello, World')

    // ---------------------------------------------------------------------------------------
    /** Exercise 2 */
    //Define a variable age of type number and a variable name of type string,
    //  and log them to the console.
    let age: number = 23
    let name: string = 'abc'
    console.log('age ', age, 'name ',  name)

    // ---------------------------------------------------------------------------------------

    /** Exercise 3 */
    //Use union types to declare a variable id that can be either a string or a number.
    let id: string | number = 'a'
    //or
    type IdType = string | number
    let myId: IdType = 233

    // ---------------------------------------------------------------------------------------

    /** Exercise 4 */
    //Write a function that takes a number as input and returns a string 
    // indicating whether the number is positive, negative, or zero.
    // Use if...else statements to control the flow of a program
    const positiveOrNegative = (num: number): string => {
        if (num > 0) return 'num is positive'
        else if (num < 0) return 'num is negative'
        return 'num is zero'
    }

    console.log(positiveOrNegative(0)) //num is zero
    console.log(positiveOrNegative(10)) //num is positive
    console.log(positiveOrNegative(-50)) //num is negative

    // ---------------------------------------------------------------------------------------

    /** Exercise 5 */
    //Create a function getDetails that takes a name and age as input and 
    // returns a tuple containing the input values and a greeting message.
    // The tuple should contain multiple values of different types
    const getDetails = (name: string, age: number): [string, number, string] => {
        return [name, age, `Hello, ${name}! You just have got your ${age}th bd!`]
    }

    const details = getDetails("Alice", 25);
    console.log(details); // ['Alice', 25, 'Hello, Alice! You just had your 25th bd!']

    // ---------------------------------------------------------------------------------------

    /** Exercise 6 */
    //Create an object type annotation that defines the shape of a Person object. The object 
    // should have two properties: name (a string) and age (a number).
    //Write a function named createPerson that takes two parameters: name (string) and age (number).
    //The function should return an object that matches the Person structure.
    //Test the createPerson function by creating a person and logging the result to the console.

    type Person = {
        name: string,
        age: number
    }

    const createPerson = (name: string, age: number): Person => {
        return {
            name: name,
            age: age
        }
    }

    console.log(createPerson('Anne', 29)) // {name: 'Anne', age: 29}

    // ---------------------------------------------------------------------------------------

    /** Exercise 7 */
    //Use document.getElementById() to retrieve an HTML element from the DOM.
    //Apply a type assertion to cast the element to a specific HTML element type,
    //  such as HTMLInputElement.
    //Once cast, use the properties of the specific element type, like setting 
    // the value of an input element.
    // Ensure that you can successfully set or manipulate a property of the element.
    const element = document.getElementById('myElement') as HTMLInputElement | null
    console.log(element)
    if (element) element.value = 'new value'


    // ---------------------------------------------------------------------------------------

    /** Exercise 8 */
    //Create a function getAction that takes a string representing a user role and 
    // returns an action for the user. Use a switch statement with complex conditions 
    // to handle multiple roles.
    const getAction = (role: string): string => {
        switch(role){
            case 'admin':
                return 'Manage users and settings'
                
            case 'editor':
                return 'Edit content'

            case 'viewer':
                return 'View content'

            case 'guest':
                return 'Limited access'
            
            default:
                return 'Invalid role'
        }
    }

    console.log(getAction("admin")); // Manage users and settings
    console.log(getAction("editor")); // Edit content
    console.log(getAction("viewer")); // View content
    console.log(getAction("guest")); // Limited access
    console.log(getAction("unknown")); // Invalid role
    
    // ---------------------------------------------------------------------------------------

    /** Exercise 9 */
    //Create an overloaded function greet that can either take a name and greet the person, 
    // or take no arguments and return a default greeting.
    function greet (name: string): string
    function greet (): string

    function greet (name: string | void): string {
        return name ? `Hello, ${name}!` : 'Hello, my friend!'
    }

    console.log('personalized ', greet('Alex')) // personalized  Hello, Alex!
    console.log('default ', greet()) // default  Hello, my friend!
    // ---------------------------------------------------------------------------------------


    return (
        <>
            <input id='myElement'/>
        </>
)
}
