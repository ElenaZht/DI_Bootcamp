// Create a self invoking function that takes 4 arguments: number of children, 
// partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> 
// in <geographic location>, and married to <partner's name> with <number of children> kids."
(
    (children, partnerName, location, job) => 
        {
            let body = document.querySelector('body')
            let h1 = document.createElement('h1')
            h1.textContent = `You will be a ${job} in ${location}, and married to ${partnerName} with ${children} kids.`
            body.appendChild(h1)
        }
)(4, "Mikey", "New York", "manager")