// Create an interface User with properties id (readonly), 
// name, and email. Extend the User interface to create a 
// PremiumUser interface with an additional optional property
//  membershipLevel. Create a function printUserDetails that accepts a 
// PremiumUser and logs the details to the console.

interface User{
    readonly id: number,
    name: string, // public by default
    email: string // public by default
}

interface PremiumUser extends User{
    membershipLevel: string
}

const printUserDetails = (premUser: PremiumUser): string  => {
    return `user ${premUser.name} has ${premUser.membershipLevel} membership level`
}

const premuser1: PremiumUser = {
    id: 0,
    name: 'Vasya',
    email: 'vasya@gmail.com',
    membershipLevel: 'golden'
}

console.log(printUserDetails(premuser1))