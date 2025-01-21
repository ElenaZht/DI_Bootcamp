let allQuotes = [
    {'id': 0, 'quote': 'Be yourself; everyone else is already taken.', 'author': 'Oscar Wilde', 'like' : 0},
    {'id': 1, 'quote': 'In three words I can sum up everything I\'ve learned about life: it goes on.', 'author': 'Robert Frost', 'like' : 0},
    {'id': 2, 'quote': 'Success is not final, failure is not fatal: It is the courage to continue that counts.', 'author': 'Winston Churchill', 'like' : 0},
    {'id': 3, 'quote': 'Happiness depends upon ourselves.', 'author': 'Aristotle', 'like' : 0},
    {'id': 4, 'quote': 'Do what you can, with what you have, where you are.', 'author': 'Theodore Roosevelt', 'like' : 0},
    {'id': 5, 'quote': 'To live is the rarest thing in the world. Most people exist, that is all.', 'author': 'Oscar Wilde', 'like' : 0},
    {'id': 6, 'quote': 'Always forgive your enemies; nothing annoys them so much.', 'author': 'Oscar Wilde', 'like' : 0}

]

let currentQuoteIndex = 0
let currentAuthorQuoteIndex = 0

function generateQuote(){
    let randomNum = Math.floor(Math.random() * allQuotes.length);
    
    const quote = document.getElementsByClassName('quote')[0]
    const author = document.getElementsByClassName('author')[0]
    const likes = document.getElementsByClassName('likes')[0]

    if (currentQuoteIndex !== randomNum){
        currentQuoteIndex = randomNum
        quote.textContent = allQuotes[randomNum]['quote']
        author.textContent = allQuotes[randomNum]['author']
        likes.textContent = `likes: ${allQuotes[randomNum]['like']}`
    } else {
        generateQuote()
    }
}

function addQuote(){
    let newQuote = document.getElementById('quoteInput').value
    let newAuthor = document.getElementById('authorInput').value

    if (allQuotes.some((q) => q['quote'] === newQuote)){
        alert('quote is already in list')
        return
    }
    let idx = allQuotes.length
    let like = 0
    allQuotes.push({'id': idx, 'quote': newQuote, 'author' : newAuthor, 'like' : 0})
}


function main(){
    const genButton = document.getElementById('genButton')
    genButton.addEventListener('click', generateQuote)

    const addButton = document.getElementById('addButton')
    addButton.addEventListener('click', addQuote)

    const numCharButton = document.getElementById('numCharButton')
    numCharButton.addEventListener('click', () => {
        if (currentQuoteIndex){
            const quote = document.getElementsByClassName('quote')[0].textContent
            const destonation = document.getElementById('numChar')
            destonation.textContent = quote.length   
        }
        
    })

    const numCharNoWhiteButton = document.getElementById('numCharNoWhiteButton')
    numCharNoWhiteButton.addEventListener('click', () => {
        if (currentQuoteIndex){
            const quote = document.getElementsByClassName('quote')[0].textContent
            const destonation = document.getElementById('numCharNotWhite')
            destonation.textContent = quote.split(' ').reduce((acc, c) => acc + c.length, 0)
        }

    })

    const numWordsButton = document.getElementById('numWordsButton')
    numWordsButton.addEventListener('click', () => {
        if (currentQuoteIndex){
            const quote = document.getElementsByClassName('quote')[0].textContent
            const destonation = document.getElementById('numWords')
            destonation.textContent = quote.split(' ').length
        }
        
    })

    const likeButton = document.getElementById('likeButton')
    likeButton.addEventListener('click', () => {
        if (currentQuoteIndex){
            allQuotes[currentQuoteIndex]['like']++
            document.getElementsByClassName('likes')[0].textContent = `likes: ${allQuotes[currentQuoteIndex]['like']}`
        }
    })

    const searchByAuthorButton = document.getElementById('searchByAuthorButton')
    searchByAuthorButton.addEventListener('click', () => {
        const author = document.getElementById('authorSearchInput').value
        const quotes = allQuotes.filter(q => q['author'].startsWith(author) || q['author'].includes(author))
        const dest = document.getElementsByClassName('quites')[0]
        const quote = document.createElement('p')
        quote.textContent = quotes[0]['quote']
        dest.appendChild(quote)
    })

    const revButton = document.getElementById('revButton')
    revButton.addEventListener('click', () => {
        const author = document.getElementById('authorSearchInput').value
        const quotes = allQuotes.filter(q => q['author'].startsWith(author) || q['author'].includes(author))

        currentAuthorQuoteIndex = (currentAuthorQuoteIndex - 1 + quotes.length) % quotes.length

        const dest = document.getElementsByClassName('quites')[0]
        dest.textContent = quotes[currentAuthorQuoteIndex]['quote']
    })

    const nextButton = document.getElementById('nextButton')
    nextButton.addEventListener('click', () => {
        const author = document.getElementById('authorSearchInput').value
        const quotes = allQuotes.filter(q => q['author'].startsWith(author) || q['author'].includes(author))

        currentAuthorQuoteIndex = (currentAuthorQuoteIndex + 1 + quotes.length) % quotes.length

        const dest = document.getElementsByClassName('quites')[0]
        dest.textContent = quotes[currentAuthorQuoteIndex]['quote']
    })
}
main()