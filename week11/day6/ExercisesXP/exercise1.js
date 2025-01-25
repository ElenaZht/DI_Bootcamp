// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log 
// the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.

function getGiphy(url){
    fetch(url)
    .then(res => {
     
     console.log('status: ', res.status)
     console.log('body: ', res.body)
     return res.json()
    })
    .then(text => console.log(text))
    .catch(e => console.log(e))
 }
 
 getGiphy('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')