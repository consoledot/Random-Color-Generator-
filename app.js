
const buttonsDiv = document.querySelector(".buttons")
const numOfButtons = 20
const primaryColors = ['red', 'yellow', 'blue']
const secondaryColors = ['green', 'orange', 'violet']
const colorBoard = document.querySelector(".color__board")
let randomNumber = 0

function isOdd(i){
   return ((i % 2) !== 0)
}

/* This function generates a new random number,
 but it makes sure its not the same with the previous one. */
function randomNumberGenerator(num){
    const random = Math.floor(Math.random() * num) 
    if(random !== randomNumber){
        randomNumber = random
        return randomNumber
    }
     return randomNumberGenerator(num)
 
}

function displayColor(colors){
    colorBoard.style.backgroundColor = colors[randomNumberGenerator(colors.length)]
}

buttonsDiv.addEventListener('click', e=>{
    const path = e.path[0]
    if(path.localName == 'button'){
       isOdd(path.textContent) ? displayColor(secondaryColors) : displayColor(primaryColors) 
    }
})

window.addEventListener("DOMContentLoaded",()=>{
    for(let i = 1;  i <= numOfButtons; i++ ){
        buttonsDiv.innerHTML += `<button>${i}</button>`
    }
    
})