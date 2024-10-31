/*
Ryan Mathews
Sep 10 2024
Sep 12, 2024
*/
console.log("Ryan Mathews")
console.log("-------- Example 1: defining a a function----------")
function msg(){
    console.log("Hello, World!")
}
// define a function that prints out the number from 3 to 1
function printnumber(){
    for(let n = 3; n>0; n++){
        console.log(`n= ${n}`);
    }
}

console.log("\n----- Example 2: defining a function with parameters ------")
// define a function to prompt a greeting using a user name passed to the function as a argument
function greeting(username){
console.log(`Welcome to Javascript programing ${username}`)
}
// define a function that prints a name in upper case
function touppername(name){
    console.log(` Thank you for your business ${name.touppername()}`)
}
// define a function to check if two numbers are 1's. The two numbers are passed to the function as arguments
function isSnakeEyes(n1, n2){
    if (n1===n2){
        console.log("NOT snake eyes")
    }
}

console.log("\n----- Example 3: defining a function with return values ------")
// define a function that returns the sum of two numbers
function doublenumber(n){
    return n*2
}
let number = parseInt(prompt("Enter a number: "))

let dbnumber = doublenumber(number)
printresult(number,dbnumber)

console.log("\n------ EXERCISE------")
function checkName(username){
    if(username===null || username=== ' '){


    }
}
let n= prompt("Enter a name:")

console.log("------ Thuesday, Sep 12 ------ \n")
console.log("Example 1 passing an array to an function ------- \n")
//function thay reads a list and returns the last item in the list
function lastitem(inputarray){
    if(inputarray===undefined){
        return null
    }
    else if(inputarray.length !== 0){
        let lastindex = inputarray.length - 1
    return inputarray[lastindex]
    }
    else{
        return null 
    }
}

console.log("Example 2: JavaScript builtoin functions ------- \n")
let pinumber = Math.PI
console.log(`PI = ${Math.P1}`)
// Math.ceil returns the rounded up numbers to its nearest integer
console.log(`PI ceil = ${Math.ceil(pinumber)}`)
// Math.floor returns the rounded down number to its nearest integer
console.log(`PI floor = ${Math.floor(pinumber)}`)
// Math.pow(base,exponet) returns the value of bass to the power of exponet
console.log(`2^3 = ${Math.pow(2,3)}`)
// Math.random returns a random number between 0 and 1
console.log(`Random number ${Math.random()*10}`)
// Math.random returns a random number between 5 and 20
console.log(`Random number ${Math.random()*10}`)

console.log("-------- Example 3: randomoly pick an item from a list ------- \n")

function pickacolor(listcolors){
    let lastindex = listcolors.length - 1
    let indexrandomcolor = Math.floor(Math.random()*lastindex)
    return listcolors[indexrandomcolor]
}

console.log("------ Example 4: varaiable function --------- \n")
const addition = function(n1,n2){
    return n1 + n2
}

let squared = function(num){
    return Math.pow(num,2)
}

console.log("------ Example 5: arrow function --------- \n")
let greeting = function(username){
    console.log(`Welcome to function in JS ${username}`)
}

console.log("------ Example 6: function with default value --------- \n")
// function that taes a argument as a number of times to roll a dice
const rolldice = (rolltimes)=>{
    for(let n = 1; m<=rolltimes; n++){
        console.log(Math.floor(Math.random()*5 + 1))
    }
}

console.log("------ Example 7: spread in a list ------\n")

const findmax = function(listnumbers){
    return Math.max(listnumbers)
}
