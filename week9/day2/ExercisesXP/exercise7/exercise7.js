// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: 
// the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the 
// user and his profile picture.

(
    (userName, userPhoto) => {
        let parent = document.querySelector('nav')

        let child = document.createElement('div')
        child.classList.add('userInfo')

        let user = document.createElement('p')
        user.textContent = userName
        user.classList.add('user')
        child.appendChild(user)

        let photo = document.createElement('div')
        photo.classList.add('photo')
        photo.style.backgroundImage = `url('${userPhoto}')`
        child.appendChild(photo)

        parent.appendChild(child)
    }
)("John", "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D")