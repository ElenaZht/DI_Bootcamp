// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
function hotelCost(nights){
   return nights * 140
}

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$
        
function planeRideCost(dest){
    let cost = {
        "London": 183,
        "Paris": 220
    }
    let standart_cost = 300

    if (dest in cost){
        return cost[dest]
    }
    return standart_cost

}

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
function rentalCarCost(days){
    let dayCost = 40
    let discountMult = 1
    if (+days > 10){
        discountMult = 0.95
    }
    return +days * dayCost * discountMult
}

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
function totalVacationCost(){
    let forHotel = 0
    let forPlane = 0
    let forCar = 0

    //ask for hotel nights
    while (true){
        let nights = prompt("enter how many nights: ")
        if (!isNaN(+nights)){
            forHotel = hotelCost(+nights)
            break
        }
    }
    //ask for destination
    while (true){
        let dest = prompt("enter your destination: ")
        if (dest != '' && typeof dest === "string"){
            forPlane = planeRideCost(dest)
            break
        }
    }
    //ask for rental car
    while (true){
        let days = prompt("enter how many days: ")
        if (days != '' && !isNaN(+days)){
            forCar = rentalCarCost(+days)
            break
        }
    }
    
    return forHotel + forPlane + forCar

 }

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.