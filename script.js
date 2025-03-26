const clickBtn = document.getElementById("click-btn")
const counter = document.getElementById("counter")

const perkUno = document.getElementById("multiply-btn")
const perkDos = document.getElementById("crit-btn")
const perkTres = document.getElementById("cheese")

const perkUnoText = document.getElementById("perkuno")
const perkDosText = document.getElementById("perkdos")
const perkTresText = document.getElementById("perktres")

const body = document.getElementById("body")
const shopText = document.querySelector(".text")
const shopDiv = document.getElementById("shop")

let isPerkUno = 0
let isPerkDos = 0
let isPerkTres = 0

let counterValue = 0

let multiplayer = 1
let crit = 0
let cheese = 0

let critAssist = 0

clickBtn.addEventListener("click", () => {
    counterCheck()
    addClick()
    if(cheese == 0){
        clickBtn.classList.add("click-btn-down")
        setTimeout(() => {
            clickBtn.classList.remove("click-btn-down")
        }, 100)
    }else{
        clickBtn.classList.add("click-btn-down-cheese")
        setTimeout(() => {
            clickBtn.classList.remove("click-btn-down-cheese")
        }, 100)
    }
})

perkUno.addEventListener("click", () => {
    if(counterValue >= 10 && isPerkUno == 0){
        isPerkUno = 1
        multiplayer = 2
        perkUno.classList.add("c")
        perkUnoText.innerHTML = ""
        counterValue = counterValue - 10
        counter.innerText = counterValue
    }
})

perkDos.addEventListener("click", () => {
    if(counterValue >= 100 && isPerkDos == 0){
        isPerkDos = 1
        crit = 1
        perkDos.classList.add("c")
        perkDosText.innerHTML = ""
        counterValue = counterValue - 100
        counter.innerText = counterValue
    }
})

perkTres.addEventListener("click", () => {
    if(counterValue >= 1000 && isPerkTres == 0){
        isPerkTres = 1
        cheese = 1
        perkTres.classList.add("c")
        perkTresText.innerHTML = ""
        counterValue = counterValue - 1000
        counter.innerText = counterValue
        cheeseProtocol()
    }
})

function cheeseProtocol(){
    body.classList.add("cheese-bg")
    clickBtn.classList.remove("click-btn-class")
    clickBtn.classList.remove("click-btn-down")

    clickBtn.classList.add("click-btn-class-cheese")
    clickBtn.classList.add("click-btn-down-cheese")

    shopText.innerHTML = "🧀SHOP🧀"
    shopDiv.classList.add("cheese-shop")
}

function addClick(){

    counterValue = multiplayer + counterValue++
    counter.innerText = counterValue

    if(crit == 1){
        critAssist++
        if(critAssist % 4 == 0){
            counterValue = counterValue + 4
            counter.classList.add("red")
            setTimeout(() => {
                counter.classList.remove("red")
            }, 100)
        }
    }
}

function counterCheck(){
    if(counterValue >= 9){
        perkUno.classList.add("b")
    }else{
        perkUno.classList.remove("b")
    }

    if(counterValue >= 99){
        perkDos.classList.add("b")
    }else{
        perkDos.classList.remove("b")
    }

    if(counterValue >= 999){
        perkTres.classList.add("b")
    }else{
        perkTres.classList.remove("b")
    }
}