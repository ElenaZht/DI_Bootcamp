// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.
let family = {'lastName': 'Zht', 'numberOfMembers': 10, 'pet': 'cat Simona'}
for(let key of Object.keys(family)) {
    console.log('key ', key)
}
for(let value of Object.values(family)) {
    console.log('value ', value)
}