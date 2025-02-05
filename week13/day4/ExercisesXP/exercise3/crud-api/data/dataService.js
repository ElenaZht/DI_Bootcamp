import axios from "axios"

export async function fetchPosts() {
    //makes a GET request to the JSONPlaceholder API to 
    // fetch data for all posts
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        return posts

    } catch (error) {
        console.error(error);
    }
}