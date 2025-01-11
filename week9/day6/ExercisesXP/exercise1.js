// Analyze the code below. What will be the output?
const person = { //definition of the new object
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person; //destructuring 
//the object the object: extracting name property and location as an object

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// *Answer: I am John Doe from undefine, undefine. Latitudeundefine, Longitudeundefine
// *Result: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
// *Explanation: the destructing syntax is correctly extracts country, city, lat and lng
// const { samekey, oldname: {samekey, newname = default value} } = object;
