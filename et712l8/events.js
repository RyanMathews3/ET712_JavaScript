let squarediv = document.querySelector('.square')
squarediv.onclick = function(){
    squarediv.style.background = 'magenta'
}



//select the element
let btnanimal = document.querySelector(".btnanimal")
let animalsdiv = document.querySelector(".animalsdiv")
//list of animal

let animals = ['fish','dog','turtle','cat','spider']
//add
btnanimal.onclick = function(){
    let randomIndex = Math.floor(Math.random() * animals.length)
    animalsdiv.textContent = animals[randomIndex]
}


let numbersdiv = document.querySelector(".numbersdiv")

numbersdiv.onmouseout = function(){
    numbersdiv.textContent = Math.ceil(Math.random()*99)
}

function pickcolor(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    return `rgb(${red},${green},${blue})`
}

numbersdiv.onclick = function(){
    numbersdiv.style.background = pickcolor()
}