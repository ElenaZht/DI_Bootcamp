// Clean up this email to have no whitespaces. Do it in a single line (return a new string).
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
function cleanWhiteSpaces(string){
    let trimmed = string.trim()
    return trimmed
}
console.log(cleanWhiteSpaces(userEmail3))