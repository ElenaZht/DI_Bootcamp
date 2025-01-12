
    function createRobotCard(robotObject){
        const parentContainer = document.getElementsByClassName('robots')[0]
        let newRobotCard = document.createElement('div')
        newRobotCard.classList.add('robotCard')

        // robot image
        const robotPicture = document.createElement('div')
        robotPicture.classList.add('robotPicture')
        robotPicture.style.backgroundImage = `url(${robotObject['image']})`
        newRobotCard.appendChild(robotPicture)

        //robot name
        const robotName = document.createElement('span')
        robotName.classList.add('robotName')
        robotName.textContent = robotObject['name']
        newRobotCard.appendChild(robotName)

        //robot email
        const robotEmail = document.createElement('span')
        robotEmail.classList.add('robotEmail')
        robotEmail.textContent = robotObject['email']
        newRobotCard.appendChild(robotEmail)

        parentContainer.appendChild(newRobotCard)
    }



function searchRobots(namePattern, allRobots){
    console.log('name pattern is ', namePattern)
    if (namePattern === 'default'){
        return allRobots
         
    }
    let filtered = allRobots.filter(r => r['name'].startsWith(namePattern)) 
    console.log('after filter', filtered)
    return filtered
}

function getSearchPatter(){
    const input = document.querySelector('input')
    if (input.value != ''){
        console.log('search pattern ', input.value)
        return input.value
    }
    return 'default'
    
}

function displayRelevantRobots(relevantRobots){
    const parentContainer = document.getElementsByClassName('robots')[0]
    parentContainer.innerHTML = "";
    for (let robot of relevantRobots){
        createRobotCard(robot)
    }
}

function main(){
    const robots = [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          image: 'https://robohash.org/1?200x200'
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          image: 'https://robohash.org/2?200x200'
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
          image: 'https://robohash.org/3?200x200'
        },
        {
          id: 4,
          name: 'Patricia Lebsack',
          username: 'Karianne',
          email: 'Julianne.OConner@kory.org',
          image: 'https://robohash.org/4?200x200'
        },
        {
          id: 5,
          name: 'Chelsey Dietrich',
          username: 'Kamren',
          email: 'Lucio_Hettinger@annie.ca',
          image: 'https://robohash.org/5?200x200'
        },
        {
          id: 6,
          name: 'Mrs. Dennis Schulist',
          username: 'Leopoldo_Corkery',
          email: 'Karley_Dach@jasper.info',
          image: 'https://robohash.org/6?200x200'
        },
        {
          id: 7,
          name: 'Kurtis Weissnat',
          username: 'Elwyn.Skiles',
          email: 'Telly.Hoeger@billy.biz',
          image: 'https://robohash.org/7?200x200'
        },
        {
          id: 8,
          name: 'Nicholas Runolfsdottir V',
          username: 'Maxime_Nienow',
          email: 'Sherwood@rosamond.me',
          image: 'https://robohash.org/8?200x200'
        },
        {
          id: 9,
          name: 'Glenna Reichert',
          username: 'Delphine',
          email: 'Chaim_McDermott@dana.io',
          image:'https://robohash.org/9?200x200'
        },
        {
          id: 10,
          name: 'Clementina DuBuque',
          username: 'Moriah.Stanton',
          email: 'Rey.Padberg@karina.biz',
          image:'https://robohash.org/10?200x200'
        }
        ];

    let searchPattern = 'default'

    const searchButton = document.getElementById('searchButton')
    searchButton.addEventListener('click',() => {
        searchPattern =  getSearchPatter()
        relevantRobots = searchRobots(searchPattern, robots)
        displayRelevantRobots(relevantRobots)
    })

    //initial calls
    searchPattern = getSearchPatter() || 'default'
    let relevantRobots = searchRobots(searchPattern, robots);
    displayRelevantRobots(relevantRobots)
    

}

main()

