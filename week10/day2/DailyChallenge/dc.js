// Create a function that:
// - takes in two strings as two parameters
// - and returns a boolean that indicates whether or not the first string 
// is an anagram of the second string.

function stringToDict(str){
    let dict = {}

    const cleanString = str.split("").filter(c => c != ' ')
    for (let c of cleanString){
        if (c in dict){
            dict[c] += 1
        } else {
            dict[c.toLowerCase()] = 1
        }
    }
    return dict
}

function isAnagram(str1, str2){

    const dict1 = stringToDict(str1)
    const dict2 = stringToDict(str2)
  
    console.log(dict1)
    console.log(dict2)
    if (Object.keys(dict1).length != Object.keys(dict2).length) return false
    for (let char of Object.keys(dict1)){
      if (!dict2[char] || dict1[char] !== dict2[char]){
        return false
      }
    }
    return true
  }
  console.log("'Astronomer', 'Moon starer' expected true ", isAnagram("Astronomer", "Moon starer"))
  console.log("'School master', 'The classroom' expected true ", isAnagram("School master", "The classroom"))
  console.log("'The Morse Code', 'Here come dots' expected true ", isAnagram("The Morse Code", "Here come dots"))
  console.log("'abc', 'abcd' expected false ", isAnagram("abc", "abcd"))
  console.log("'abcd', 'acbh' expected false ", isAnagram("abcd", "acbh"))