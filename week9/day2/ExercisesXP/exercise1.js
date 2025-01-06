// I WILL CHANGE VARAIBLE A NAME IN EVERY OTHER CASE TO AVOID "CAN'T REDECLARATE" ERROR

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
// #1.1 - run in the console:
funcOne()
// **Prediction: a is 3, because we use it inside it's scope
// **Answer: 3

// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// **Prediction: it will cause an error "trying to reasign constant"
// **Answer: Error "Cannot assign to "a" because it is a constant"

//#2
let b = 0;
function funcTwo() {
    b = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${b}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// **Prediction: 0 / 5 because funcTwo use outer scope variable not local one
// **Answer: inside the funcThree function 0 / inside the funcThree function 5

// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// **Prediction: first will become alert (0) and then error "Cannot assign because it is a constant"
// **Answer: error only. "Even attempting to reassign the value of a const variable 
// results in an immediate error as soon as the code is parsed (before it runs)"

//#3
function funcFour() {
    window.c = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${c}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()
// **Prediction: funcFour() - undefined(function has no return), funcFive() - alert undefined(c is local varaible)
// **Answer: funcFour() - console is empty, because we didn't console.log it, funcFive() - alert hello, 
// because window is global object, othervise it would be an error "c is not defined"

//#4
let d = 1;
function funcSix() {
    let d = "test";
    alert(`inside the funcSix function ${d}`);
}


// #4.1 - run in the console:
funcSix()
// **Prediction: "test" - same scope
// **Answer: "test"

// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// **Prediction: "test" - we not reasign it, just declare a new one
// **Answer: "test"

//#5
let e = 2;
if (true) {
    let e = 5;
    alert(`in the if block ${e}`);
}
alert(`outside of the if block ${e}`);
// **Prediction: in the if block 5, outside of the if block 2, because second e is local so it is different variables
// **Answer: in the if block 5, outside of the if block 2
// #5.1 - run the code in the console

// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// **Prediction: in the if block 5, outside of the if block 2, because second e is local and we are not redeclare it
// **Answer: in the if block 5, outside of the if block 2