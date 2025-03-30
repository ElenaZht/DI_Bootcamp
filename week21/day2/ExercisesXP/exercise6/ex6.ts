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
console.log(createPerson('lena', 29))
console.log(createPerson('dima', 41))