// Using this object:

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.
const passedStudents = students.filter(s => s['isPassed'])
console.log(passedStudents)

// Bonus : Chain the filter method with a forEach method, to congratulate the students with 
// their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, 
//“Good Job Marco you passed the course in Robotics” ect…)
const congratulateStudents = students.filter(s => s['isPassed']).map(s => `Good Job ${s['name']} you passed the ${s['course']} course!`)
console.log(congratulateStudents)