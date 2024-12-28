
// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

let planets = [
    {
        name: "Mercury",
        backgroundColor: "gray",
        moons: [] // Mercury has no moons
    },
    {
        name: "Venus",
        backgroundColor: "yellow",
        moons: [] // Venus has no moons
    },
    {
        name: "Earth",
        backgroundColor: "blue",
        moons: [
            { name: "Moon", color: "white" }
        ]
    },
    {
        name: "Mars",
        backgroundColor: "red",
        moons: [
            { name: "Phobos", color: "dark gray" },
            { name: "Deimos", color: "light gray" }
        ]
    },
    {
        name: "Jupiter",
        backgroundColor: "orange",
        moons: [
            { name: "Io", color: "yellow" },
            { name: "Europa", color: "white" },
            { name: "Ganymede", color: "brown" },
            { name: "Callisto", color: "dark brown" }
        ]
    },
    {
        name: "Saturn",
        backgroundColor: "gold",
        moons: [
            { name: "Titan", color: "orange" },
            { name: "Enceladus", color: "white" },
            { name: "Rhea", color: "gray" },
            { name: "Dione", color: "light gray" }
        ]
    },
    {
        name: "Uranus",
        backgroundColor: "light blue",
        moons: [
            { name: "Miranda", color: "gray" },
            { name: "Ariel", color: "white" },
            { name: "Umbriel", color: "dark gray" },
            { name: "Titania", color: "light gray" },
            { name: "Oberon", color: "dark brown" }
        ]
    },
    {
        name: "Neptune",
        backgroundColor: "blue",
        moons: [
            { name: "Triton", color: "pink" },
            { name: "Nereid", color: "gray" }
        ]
    }
];

let parenSection = document.querySelector('section')
parenSection.style.color = 'white'
parenSection.style.display = 'flex'
for (let planet of planets){
    let solPlanet = document.createElement('div')
    solPlanet.classList.add('planet')
    solPlanet.style.backgroundColor = planet['backgroundColor']
    solPlanet.textContent = planet['name']
    solPlanet.style.webkitTextStroke = ".5px black";
    let moonList = document.createElement('ul')
    parenSection.appendChild(solPlanet)

    for (let moon of planet.moons){
        
        let moonPlanet = document.createElement('div')
        moonPlanet.classList.add('moon')
        moonPlanet.style.position = 'relative'
        moonPlanet.style.backgroundColor = moon['color']
        moonPlanet.textContent = moon['name']
        moonPlanet.style.webkitTextStroke = ".5px black";
        let li = document.createElement('li')
        li.appendChild(moonPlanet)
        moonList.appendChild(li)
        solPlanet.appendChild(moonList)
    }
}