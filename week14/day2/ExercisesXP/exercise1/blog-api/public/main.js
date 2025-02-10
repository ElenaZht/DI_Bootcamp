function render(data) {
    const wrapper = document.getElementsByClassName('wrapper')[0];
    wrapper.innerHTML = ''; // Clear previous posts to avoid duplication

    for (let post of data) {
        const { id, title, content } = post;
        createPost(wrapper, id, title, content);
    }
}

function createPost(wrapper, id, title, content) {
    const post = document.createElement('div');
    post.classList.add('post');
    post.id = id

    const h2 = document.createElement('h2');
    h2.textContent = title;

    const p = document.createElement('p');
    p.textContent = content;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add("btn", "edit-btn");
    editBtn.addEventListener('click', updatePost)

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add("btn", "remove-btn");
    removeBtn.addEventListener('click', removePost)

    post.appendChild(h2);
    post.appendChild(p);
    post.appendChild(editBtn);
    post.appendChild(removeBtn);

    wrapper.appendChild(post);
}

async function removePost(event) {
    event.preventDefault()
    const id = event.target.parentElement.id;

    if (id) {
        try {
            const result = await fetch(`http://localhost:3000/posts/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if (result.ok) {
                console.log(`Post with ID ${id} deleted successfully.`);
                getPosts(); // Refresh the posts list after deletion
            } else {
                console.error("Failed to delete post.");
            }
        } catch (error) {
            console.error(error);
        }
    }
    
}

async function updatePost(event) {
    event.preventDefault();

    const id = event.target.parentElement.id;
    const newTitle = prompt("Enter new title:");
    const newContent = prompt("Enter new content:");

    if (!id || !newTitle || !newContent) return alert("Missing required information");

    try {
        const result = await fetch(`http://localhost:3000/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: newTitle, content: newContent }),
        });

        if (result.ok) {
            console.log(`Post with ID ${id} updated successfully.`);
            getPosts();
        } else {
            console.error("Failed to update post.");
        }
    } catch (error) {
        console.error(error);
    }
}



async function getPosts() {
    try {
        const res = await fetch('http://localhost:3000/posts')
        if (res){
            const data = await res.json()
            render(data)
            console.log(data)
        }

    } catch (error) {
        console.error(error)
    }
}

async function addPost(event) {
    event.preventDefault()

    const postTitle = document.getElementById('postTitle').value
    const postContent = document.getElementById('postContent').value

    if (postContent && postTitle){
        try {
            const result = await fetch("http://localhost:3000/posts", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({ title: postTitle, content:  postContent}),
            }); 
            if (result){
                getPosts()
            }

        } catch (error) {
           console.log(error) 
        }
    }
}

function main(){
    const addBtn = document.getElementById('addBtn')
    addBtn.addEventListener('click', addPost)

    getPosts()


}
main()