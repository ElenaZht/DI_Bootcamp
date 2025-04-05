// Define an intersection type PersonWithAddress that combines Person
//  and Address types. Create a variable of this type with properties
//  from both types.
// The Person type should contain name and age, 
// the Address type should contain street and city,

type Person = {
    name: string,
    age : number
}

type Address = {
    street: string,
    city: string
}

type PersonWithAddress = Person & Address;
const personWithAddress: PersonWithAddress = {
    name: "John Doe",
    age: 30,
    street: "123 Main St",
    city: "New York"
};
