import express from 'express'
import axios from 'axios'

const app = express()

app.get('/api/posts', (req, res) => {
    //send all posts
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => res.send(response.data))
    .catch(error => res.status(500).send('Error fetching posts: ' + error));
  
})


app.get('/api/posts/:id', (req, res) => {
    //send post with id
    const postId = req.params.id
    axios.get('https://jsonplaceholder.typicode.com/posts/' + postId)
    .then(response => res.send(response.data))
    .catch(error => res.status(500).send('Error fetching posts: ' + error));

})

//todo Read Single Post: GET /api/posts/:id
//todo  Create Post: POST /api/posts
//todo  Update Post: PUT /api/posts/:id
//todo  Delete Post: DELETE /api/posts/:id

app.listen(5000, () => {
    console.log('server is running..')
})