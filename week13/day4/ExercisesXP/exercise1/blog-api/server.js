import express from 'express'

const app = express()

let data = [
    {'id': '1', 'title': 'Why Use Express Instead of Nodes HTTP Module?', 'content': 'Node.js comes with a built-in HTTP module, but Express makes server creation easier. With built-in routing, middleware support, and cleaner code, Express helps developers focus on logic instead of boilerplate. Want faster development? Choose Express.'},
    {'id': '2', 'title': 'What Is the Node.js Event Loop?', 'content': 'The event loop in Node.js manages tasks in phases, like a baker scheduling bread orders in a busy kitchen. It handles timers, I/O operations, and immediate callbacks efficiently. The best part? No blocking the bakery — the kernel (oven) does the hard work.'},
    {'id': '3', 'title': 'What Happens When You Submit a Form?', 'content': 'Submitting a form triggers the browser to send form data to a server via GET (query parameters) or POST (request body). Default behavior refreshes the page. But with JavaScript, you can prevent the reload and handle requests asynchronously for a smoother experience.'},
    {'id': '4', 'title': 'Why Prevent Default in Form Submissions?', 'content': 'The default form submission reloads the page and sends data directly to the server. This is legacy behavior from the early web days. Modern web apps prefer handling form submissions with JavaScript to update the page dynamically — making event.preventDefault() essential.'},
    {'id': '5', 'title': 'What’s the Difference Between JWT and Session Cookies?', 'content': 'JWTs are signed tokens stored in local storage or cookies, perfect for stateless authentication. Session cookies are key-value pairs stored in the browser and require server-side storage. JWTs scale better for modern APIs, while sessions are common for traditional web apps.'},
    {'id': '6', 'title': 'Node.js vs. Express: What’s the Difference?', 'content': 'Node.js is like raw dough — powerful but requires effort to mold. Express is a full-blown bakery, with tools to build delicious apps quickly. Express provides routing, middleware, and request parsing out of the box, while Node.js requires everything from scratch.'},
]

//GET /posts: Return a list of all blog posts.
app.get('/posts', (req, res) => {
    res.send(`<h1>All posts</h1><p><pre>${JSON.stringify(data, null, 2)}</pre></p>`);
})

//GET /posts/:id: Return a specific blog post based on its id.
app.get('/posts/:id', (req, res) => {
    const postId = req.params.id
    const post = data.find((p) => p.id === postId)
    if (post){
        res.send(`<div><p>${post.title}</p><p style="width: 300px">${post.content}</p></div>`)
    } else {
        res.send('<h1>Post not found</h1>')
    }
})

//todo POST /posts: Create a new blog post.
//todo PUT /posts/:id: Update an existing blog post.
//todo DELETE /posts/:id: Delete a blog post.

app.use('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>')
  })

app.listen(5000, () => {
    console.log('server is running...')
})