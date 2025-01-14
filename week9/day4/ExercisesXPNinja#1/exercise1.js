const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
     {
      name: 'Cuty',
      age: 5,
      type: 'rabbit'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Rex',
      age: 10,
      type: 'dog'
    },
  ]

//1. Use a loop to find the sum of the dogs’ ages in human years.
// Hint: 1 dog year equals 7 human years

function allDogsHumanAge(data){
let sum = 0
for (let d of data){
    sum += d['age']
}
return sum * 7
}
console.log(allDogsHumanAge(data)) //196

//2. Using the reduce() method, find the sum of the dogs’ ages in human years.
function reduceDogHumanAges(data){
    return data.reduce((acc, dog) => acc + dog['age'], 0) * 7
}
console.log(reduceDogHumanAges(data))