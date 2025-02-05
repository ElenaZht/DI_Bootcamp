import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors());

const emojis = [
    { name: 'Smile', emoji: '😀' },
    { name: 'Grin', emoji: '😁' },
    { name: 'Laugh', emoji: '😂' },
    { name: 'Blush', emoji: '😊' },
    { name: 'Wink', emoji: '😉' },
    { name: 'Heart Eyes', emoji: '😍' },
    { name: 'Smirk', emoji: '😏' },
    { name: 'Sad', emoji: '😞' },
    { name: 'Cry', emoji: '😢' },
    { name: 'Angry', emoji: '😠' },
    { name: 'Surprise', emoji: '😲' },
    { name: 'Confused', emoji: '😕' },
    { name: 'Cool', emoji: '😎' },
    { name: 'Tongue Out', emoji: '😛' },
    { name: 'Kiss', emoji: '😘' },
    { name: 'Love', emoji: '🥰' },
    { name: 'Hug', emoji: '🤗' },
    { name: 'Shy', emoji: '😳' },
    { name: 'Smiling Eyes', emoji: '☺️' },
    { name: 'Facepalm', emoji: '🤦' },
    { name: 'Handshake', emoji: '🤝' },
    { name: 'Victory', emoji: '✌️' },
    { name: 'Raised Hand', emoji: '✋' },
    { name: 'Clapping', emoji: '👏' },
    { name: 'Thumbs Up', emoji: '👍' },
    { name: 'Thumbs Down', emoji: '👎' },
    { name: 'Fist Bump', emoji: '👊' },
    { name: 'Peace Sign', emoji: '✌️' },
    { name: 'Ok Hand', emoji: '👌' },
    { name: 'Waving', emoji: '👋' },
    { name: 'Praying', emoji: '🙏' },
    { name: 'Nerd', emoji: '🤓' },
    { name: 'Zombie', emoji: '🧟' },
    { name: 'Vulcan Salute', emoji: '🖖' },
    { name: 'Man Dancing', emoji: '🕺' },
    { name: 'Woman Dancing', emoji: '💃' },
    { name: 'Person Raising Hand', emoji: '🙋' },
    { name: 'Person Walking', emoji: '🚶' },
    { name: 'Person Running', emoji: '🏃' },
    { name: 'Person in Suit Levitating', emoji: '🕴️' },
    { name: 'Face with Medical Mask', emoji: '😷' }
]

const options = [
    "Smile", "Dog", "Taco", "Robot", "Man Technologist", "Singer", 
    "Woman Judge", "Woman Scientist", "Man Teacher", "Student", 
    "Woman Cook", "Astronaut", "Man Judge", "Person with Curly Hair", 
    "Man Mechanic", "Woman Office Worker", "Person with Red Hair", 
    "Woman Teacher", "Man Scientist", "Person Cook", 
    "Man", "Woman", "Child", "Boy", "Girl", "Person with Blond Hair", 
    "Person with Beard", "Woman with Beard", "Person with Glasses", "Person with Moustache", 
    "Person in Tuxedo", "Person in Kimono", "Person in Veil", "Person in Viking Hat", 
    "Person in Cape", "Person in Pirate Hat", "Person in Headband", "Person in Ski Mask", 
    "Person in Santa Hat", "Person in Party Hat", "Person in Scarf", "Person in Swimming Trunks"
]

function createChallenge(){
    let challenge = []
    //generate random emoji
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
    challenge.push(randomEmoji)

    //generate random distrative options
    const randomNames = [...Array(3)].map(() => {
        let randomName
        do {
          randomName = options[Math.floor(Math.random() * options.length)]
        } while (randomName === randomEmoji)
        return randomName
      });
    challenge.push(randomNames)

    return challenge
}

app.get('/challenge', (req, res) => {
    let challenge = createChallenge()
    res.send(challenge)
})

app.listen(5000, () => {
    console.log('server is running..')
})