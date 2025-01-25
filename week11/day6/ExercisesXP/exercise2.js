// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.

function getGiphy(amount, term, startPosition){
    const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
    // https://api.giphy.com/v1/gifs/search?
    // q={term}
    // &limit={amount}
    // &offset={startPosition}
    // &api_key={apiKey}
    const requestUrl = `https://api.giphy.com/v1/gifs/search?q=${term}&limit=${amount}&offset=${startPosition}&api_key=${apiKey}`
    fetch(requestUrl)
        .then(resp => resp.json())
        .then(resJson => {
          console.log(resJson.meta.status, resJson.meta.msg)
          console.log(resJson.data.forEach(obj => console.log(obj.url)))
        })
        .catch(er => console.error(er))

}

getGiphy(10, 'sun', 2)