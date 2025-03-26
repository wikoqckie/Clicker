const clickBtn = document.getElementById("click-btn")
const counter = document.getElementById("counter")

const perkUno = document.getElementById("multiply-btn")
const perkDos = document.getElementById("crit-btn")
const perkTres = document.getElementById("cheese")

const perkUnoText = document.getElementById("perkuno")
const perkDosText = document.getElementById("perkdos")
const perkTresText = document.getElementById("perktres")

let counterValue = 0
let multiplayer = 1

clickBtn.addEventListener("click", () => {
    counterCheck()
    addClick()
    clickBtn.classList.add("click-btn-down")
    setTimeout(() => {
        clickBtn.classList.remove("click-btn-down")
    }, 100)
})

perkUno.addEventListener("click", () => {
    if(counterValue >= 10){
        multiplayer = 2
        perkUno.classList.add("c")
        perkUnoText.innerHTML = ""
    }
})

function addClick(){
    counterValue = multiplayer + counterValue++
    counter.innerText = counterValue
}

function counterCheck(){
    if(counterValue >= 9){
        perkUno.classList.add("b")
    }else{
        perkUno.classList.remove("b")
    }
}