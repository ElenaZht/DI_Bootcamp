import axios from 'axios';

//use it to make an HTTP GET request to a JSON 
// placeholder API (e.g., https://jsonplaceholder.typicode.com/posts) 
// and fetch a list of posts.

async function getPosts(){
    try{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response => {
            console.log(response.data)
            for (let post of response.data){
                console.log(post.title)
            }
        }))
        .catch(e => console.error(e))
        

    } catch (error){
        console.error(error)
    }
    
    
}
function main(){
    getPosts()
}
main()