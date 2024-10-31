// collect the componets
const myform = document.querySelector("#myform")
const username = document.querySelector("#username")
const greetingspan = document.querySelector(".greeting p span")

// add submit event to form
myform.addEventListener("submit", function(e){
    e.preventDefault()

    //collect componets when the submit button is clicked
    const usernameValue = document.querySelector("#username")
    const usernamevalue = username.value 

    // display a warning if the username was not entered
    if(usernamevalue === ""){
        alert("Please enter your name")
        return
    }

    //display the username in the greeting paragraph 
    greetingspan.textContent = usernamevalue

    // clear the username text field
    usernamevalue.textContent =" "
})

/**
 * 
 * FORM VALIDATION
 */
let passworderror = document.querySelector("#passworderror")
let btnlogin = document.querySelector(".btnlogin")
let passwordform = document.querySelector("#passwordform")
let passwordinput = document.querySelector("#password")

// disable the login button
passwordform.addEventListener("input", function(){
    btnlogin.disabled = True 
})

passwordinput.addEventListener("input", function(){
    const passwordcount = passwordinput.value
    // check if the password has 8+ characters
    if(passwordcount.length >= 8){
        passworderror.textContent = "password must be at least 8 characters long"
        } else {
            passworderror.textContent = ""
    }

})