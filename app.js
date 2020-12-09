console.log("yass")
const buttonsDiv = document.querySelector(".buttons")
const numOfButtons = 20
const primaryColors = ['red', 'yellow', 'blue']
const secondaryColors = ['green', 'orange', 'violet']
const colorBoard = document.querySelector(".color__board")

for(let i = 1;  i <= numOfButtons; i++ ){
    buttonsDiv.innerHTML += `<button>${i}</button>`
}

function isOdd(i){
   return ((i % 2) !== 0)
}
function randomNumberGenerator(num){
    var randomNumber = 0
    const random = Math.floor(Math.random() * num) 
    if(random == randomNumber) randomNumberGenerator(num)
    randomNumber = random
    return randomNumber

}
function displayColor(colors){
        colorBoard.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}
buttonsDiv.addEventListener('click', e=>{
    const path = e.path[0]
    if(path.localName == 'button'){
       isOdd(path.textContent) ? displayColor(primaryColors) : displayColor(secondaryColors)
    }
})