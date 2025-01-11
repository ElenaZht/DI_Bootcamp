//1. Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
//2. Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”

//3. Instantiate a new Video instance and call the watch() method.

//4. Instantiate a second Video instance with different values.

//5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.

//6. Bonus: Loop through the array to instantiate those instances.

class Video{
    constructor(title, uploader, time){
        this.title = title  // string
        this.uploader = uploader // persone name, string
        this.time = time // video duration is seconds, number
    }

    watch(){
        return `${this.uploader} watched all ${this.time} of ${this.title}!`
    }
}
const vid = new Video('cats', 'john', 20)
console.log(vid.watch()) // john watched all 20 of cats!

const vid2 = new Video('dogs', 'Marry', 150)
console.log(vid2.watch()) // Marry watched all 150 of dogs!

const futureVideos = [
    ['funny bunny', 'Luca', 230],
    ['how to eat banana right', 'Micke', 500],
    ['let\'s go with me to paris', 'Molly', 1200]
]

let videoInstances = {};
const names = ['bunny', 'banana', 'paris']

for (let i = 0; i < futureVideos.length; i++){
    const [title, uploader, time] = futureVideos[i];
    const dynamicKey = `${names[i]}`
    videoInstances[dynamicKey] = new Video(title, uploader, time)
}
for (let instance of Object.entries(videoInstances)){
    instance.watch()
}