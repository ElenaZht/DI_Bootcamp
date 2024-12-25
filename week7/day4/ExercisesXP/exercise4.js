const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Console.log the number of floors in the building.
console.log(`there are ${building['numberOfFloors']} floors`)

// Console.log how many apartments are on the floors 1 and 3.
console.log(`there are ${building['numberOfAptByFloor']['firstFloor']} apartments on the 1st and ${building['numberOfAptByFloor']['thirdFloor']} apartments on the 3rd floor`)

// Console.log the name of the second tenant and the number of rooms he has 
// in his apartment.
let tenant_name = building['nameOfTenants'][1]
let rooms = building['numberOfRoomsAndRent'][tenant_name.toLowerCase()][0]
console.log(`the second tenant's name is ${tenant_name} and he has ${rooms} rooms`)

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. 
// If it is, than increase Dan’s rent to 1200
let sarah_rent = building['numberOfRoomsAndRent']["Sarah".toLowerCase()][1]
let david_rent = building['numberOfRoomsAndRent']["David".toLowerCase()][1]
let dan_rent = building['numberOfRoomsAndRent']["Dan".toLowerCase()][1]

if (sarah_rent + david_rent > dan_rent){
    building['numberOfRoomsAndRent']["Dan".toLowerCase()][1] = 1200;
    console.log('the sum of Sarah’s and David’s rent is bigger than Dan’s rent, so Dan now pais ', building['numberOfRoomsAndRent']["Dan".toLowerCase()][1])
} else {
    console.log('e sum of Sarah’s and David’s rent is less than Dan’s rent')
}
