// Create a function describeValue that accepts number | string. 
// Use type guards to return a description based on the input type:

// "This is a number" for numbers.
// "This is a string" for strings.

type numOrStr = number | string

const describeValue = (value: numOrStr): string => {
    if (typeof value === 'string') {
        return 'this is a string'
    }
    return 'this is a number'
}

console.log(describeValue(5))
console.log(describeValue('abc'))