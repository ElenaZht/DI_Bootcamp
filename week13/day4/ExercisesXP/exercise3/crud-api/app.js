import express from 'express'
import { fetchPosts } from './data/dataService.js'

const app = express()

app.get('/posts', async (req, res) => {
    try {
        const data = await fetchPosts()
        if (data){
            res.json(data)
        } else {
            res.status(404).send({ status: 'No posts found' })
        }
    } catch (error) {
        res.status(500).send({ status: 'Failed to fetch posts', error: error.message })
    }

})

app.listen(5000, () => {
    console.log('server is running ..')
})