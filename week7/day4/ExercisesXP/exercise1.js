const people = ["Greg", "Mary", "Devon", "James"];

// Write code to remove “Greg” from the people array.
people.splice(people.indexOf("Greg"), 1);
console.log(people);

// Write code to replace “James” to “Jason”.
people.splice(people.indexOf("James"), 1, "Jason");
console.log(people);

// Write code to add your name to the end of the people array.
people.push("Elena");
console.log(people);

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
mary_idx = people.indexOf("Mary");
console.log(mary_idx);

// Write code to make a copy of the people array using the slice method.
    // The copy should NOT include “Mary” or your name.
    // Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
    // Hint: Check out the documentation for the slice method
people_copy = people.slice(1, 3);
console.log(people_copy);

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo")) //Foo is not in people array, indexOf returns -1 if not found

// Create a variable called last which value is the last element of the array.
    // Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people[people.length - 1]
console.log(last)

// Using a loop, iterate through the people array and console.log each person.
for (let p of people){
    console.log(p)
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
    // Hint: take a look at the break statement in the lesson.
for (p of people){
    console.log(p);
    if( p == "Devon"){
        break;
    }
}