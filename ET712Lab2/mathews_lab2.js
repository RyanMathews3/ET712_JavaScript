/*
Ryan Mathews 
Sep 3 array and conditional statement
*/
console.log("------- Ryan Mathews -------")
console.log("------- Example 1: array ------- \n")
let fruits
fruits = ['oranges','apples','peaches']
console.log(fruits)
console.log(fruits[1])
let numbers = [-2, 9.2, 5, -3.2, 12]
console.log(`The first number is ${numbers[0]}` )
let mixedarray = [false, 6 , 'Peter Pan', true, 'Martha']
console.log(mixedarray)
console.log("\n------- Example 2: array methods -------")
// reverse method: reverses items order
mixedarray.reverse()
console.log(`Reversed mixedarray = ${mixedarray}`)
// shift method: remove the first item, left-most, from the list
mixedarray.shift()
console.log(`After shift mixedarray = ${mixedarray}`)
// unshift method: add items to the list
mixedarray.unshift("QCC", 'ET712', 2024)
console.log(`After unshift method = ${mixedarray}`)
// push method: add items to the list from the right
mixedarray.push('$9.50', -2)
console.log(`After push method = ${mixedarray}`)
// indexof method: return the index number of the found item in the list
let searchitem ='Ann' 
let resultsearch = mixedarray.indexOf(searchitem)
console.log(`What is the index of ${searchitem} in the list? = ${resultsearch}`)

console.log("\n------- Example 3: conditiona statement -------- \n")
let day = true
let night = false
let num = 1

console.log(`num is = ${num}`)

if(night){
    num = num + 20
}

console.log(`num is ${num}`)

console.log("\n------- Example 4: if-else statement ------")
let age = 15

if(age >= 21){
    console.log("Adult")
}
else{
    console.log("Under age")
}

console.log("\n------- Example 5: if- else statement ------ \n")
let num1 = 10
let num2 = 5

if(num1 == num2){
    console.log("The numbers are the same")
}
else if (num1>num2){
    console.log("num1 is greater than num2")
}
else if (num2>num1){
    console.log("num2 is greater than num1")
}
else{
    console.log("Unable to compare numbers")
}

console.log("\n------- Example 6: if- else if, ..., else statement and prompt dialog box ------")
let pin = prompt("Enter a pin number")
let checkpin = isNaN(pin)

if(checkpin){
    console.log("you didnt enter a number")
}
else if (checkpin){
    console.log(`your pin number is ${pin}`)
}
else if (pin===''){
    console.log("you didnt enter a pin")
}
else if(pin == null){
    console.log("you canceled")
}
else{
    console.log("invalid operations")
}

console.log("\n------- Exercise ------- \n")
const userInput = prompt("Enter a value:");

if (!isNaN(userInput)) {
  const num = parseFloat(userInput);
  if (num < 0){
    console.log(`${userInput} is a negative number.`);
  } else if (num > 0) {
    console.log(`${userInput} is a positive number.`);
  } else {
    console.log(`${userInput} is zero.`);
  }
} else {
  console.log(`${userInput} is a string.`);
}

console.log("\n------ Exercise2 -------- \n")
const num = parseFloat(userinput)




