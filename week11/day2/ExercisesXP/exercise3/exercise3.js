const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }
//1. Convert this JS object into a JSON object. 
// What happens to the nested objects ?
const marioGameJson = JSON.stringify(marioGame)
console.log(marioGameJson)
// {"detail":"An amazing game!","characters":{"mario":{"description":"Small and jumpy. Likes princesses.","height":10,"weight":3,"speed":12},"bowser":{"description":"Big and green, Hates princesses.","height":16,"weight":6,"speed":4},"princessPeach":{"description":"Beautiful princess.","height":12,"weight":2,"speed":2}}}
//*Answer: method JSON.stringify converts object to 
//* json format including nested objects automatically

//2. Convert and pretty print this JS object into a JSON object.
//  Hint : Check out the JSON lesson on the platform.
const marioGameJsonPretty = JSON.stringify(marioGame, null, 2)
console.log(marioGameJsonPretty) // json object with indent of size 2

//3. Use your web inspector to add a breakpoint. 
// Check the values of the JSON object in the debugger.
//*Answer:

// marioGame :  {detail: 'An amazing game!', characters: {…}}
// marioGameJson : "{\"detail\":\"An amazing game!\",\"characters\":{\"mario\":{\"description\":\"Small and jumpy. Likes princesses.\",\"height\":10,\"weight\":3,\"speed\":12},\"bowser\":{\"description\":\"Big and green, Hates princesses.\",\"height\":16,\"weight\":6,\"speed\":4},\"princessPeach\":{\"description\":\"Beautiful princess.\",\"height\":12,\"weight\":2,\"speed\":2}}}"
// marioGameJsonPretty : "{\n  \"detail\": \"An amazing game!\",\n  \"characters\": {\n    \"mario\": {\n      \"description\": \"Small and jumpy. Likes princesses.\",\n      \"height\": 10,\n      \"weight\": 3,\n      \"speed\": 12\n    },\n    \"bowser\": {\n      \"description\": \"Big and green, Hates princesses.\",\n      \"height\": 16,\n      \"weight\": 6,\n      \"speed\": 4\n    },\n    \"princessPeach\": {\n      \"description\": \"Beautiful princess.\",\n      \"height\": 12,\n      \"weight\": 2,\n      \"speed\": 2\n    }\n  }\n}"