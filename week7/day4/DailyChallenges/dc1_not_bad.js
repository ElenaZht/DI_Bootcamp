// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.
// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
// If the word “bad” comes after the word “not”, 
// you should replace the whole “not…bad” substring with “good”, 
// then console.log the result.
// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
function notBad(sentence){
    if (sentence.length){
        let arr = sentence.split(/[ ,.!?;:(){}\[\]'"-]+/)
        let not_idx = arr.indexOf("not")
        let bad_idx = arr.indexOf("bad")

        if (not_idx != -1 && bad_idx != -1){
            if (not_idx < bad_idx){
                let wordsToRemove = bad_idx - not_idx
                arr.splice(not_idx, wordsToRemove + 1, "good")
                sentence = arr.join(" ")
            }
        
        }
    

    return sentence
    }
}

let sentence1 = "The movie is not that bad, I like it"
let sentence2 = "This movie is not so bad !"
let sentence3 = "This dinner is bad !"

console.log(notBad(sentence1))
console.log(notBad(sentence2))
console.log(notBad(sentence3))