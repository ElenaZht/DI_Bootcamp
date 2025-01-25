// Improve the program below :

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.

async function getSwapi(url) {
    const response = await fetch(url)
     if (!response.ok){
      console.error('no valuble response', response.message )
      return
    }
    const data = await response.json()

    if (data.result && data.result.properties){
      console.log(data.message)
      console.log(data.result.description, data.result.properties.model)
      console.log(data.result.properties.name)
    } else {
            console.error('Error: Expected data structure is missing.')
            }

}
getSwapi("https://www.swapi.tech/api/starships/9/")