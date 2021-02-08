document.querySelector('#spinBtn').addEventListener('click', spin)
document.querySelector('#minBet').addEventListener('click', minBet)
document.querySelector('#maxBet').addEventListener('click', maxBet)

let isMinBet = false
let isMaxBet = false
let score = 1000
let jackpot = 5000
let isJackpot = false

document.querySelector('h2').innerText = `Jackpot: ${jackpot}`

function spin() {
    let slot1RandomNumber = Math.floor(Math.random() * 10 + 20)
    let slot2RandomNumber = Math.floor(Math.random() * 10 + 35)
    let slot3RandomNumber = Math.floor(Math.random() * 10 + 50)
    let slot1 = document.getElementById('img1')
    let slot2 = document.getElementById('img2')
    let slot3 = document.getElementById('img3')
    let arr = ['img/1.svg', 'img/2.svg', 'img/3.svg', 'img/pokeball.svg', 'img/5.svg',]
    let testingNumber1 = 0
    let testingNumber2 = 0
    let testingNumber3 = 0
    let i = 0
    let j = 0
    let k = 0


    spin2win = setInterval(spinReel1, 50)
    spin2win2 = setInterval(spinReel2, 50)
    spin2win3 = setInterval(spinReel3, 50)

    function spinReel1() {

        testingNumber1++
        i++
        if (testingNumber1 >= slot1RandomNumber) {
            clearInterval(spin2win)
        }
        if (i === 5) {
            i = 0
            slot1.src = arr[i]
        } else {
            slot1.src = arr[i]
        }
    }
    function spinReel2() {
        testingNumber2++
        j++
        if (testingNumber2 >= slot2RandomNumber) {
            clearInterval(spin2win2)
        }
        if (j === 5) {
            j = 0
            slot2.src = arr[j]
        } else {
            slot2.src = arr[j]
        }
    }
    function spinReel3() {
        testingNumber3++
        k++
        if (testingNumber3 >= slot3RandomNumber) {
            clearInterval(spin2win3)
            updateJackpot()
        }

        if (k === 5) {
            k = 0
            slot3.src = arr[k]
        } else {
            slot3.src = arr[k]
        }

    }

}

function minBet() {
    isMinBet = true
    isMaxBet = false
    minBet = document.querySelector("#minBet").className = ""
    minBet = document.querySelector("#minBet").className += "betBorder "
    maxBet = document.querySelector("#maxBet").className -= "betBorder "
    maxBet = document.querySelector("#maxBet").className = ""

    console.log(isMinBet, isMaxBet)
}
function maxBet() {
    isMinBet = false
    isMaxBet = true
    maxBet = document.querySelector("#maxBet").className += ""
    maxBet = document.querySelector("#maxBet").className += "betBorder "
    minBet = document.querySelector("#minBet").className -= "betBorder "
    minBet = document.querySelector("#minBet").className = ""
    console.log(isMinBet, isMaxBet)
}

function updateJackpot() {
    checkForJackpot()
    if (isJackpot === true) {
        score += jackpot
    } else {
        jackpot += 25
        document.querySelector('h2').innerText = `Jackpot: ${jackpot}`
    }
}

function checkForJackpot() {
    let slot1 = document.getElementById('img1')
    let slot2 = document.getElementById('img2')
    let slot3 = document.getElementById('img3')
    let pokeBalls = 'img/pokeball.svg'

    if (slot1.src === pokeBalls && slot2.src === pokeBalls && slot3.src === pokeBalls) {
        isJackpot = true
    }

    console.log(slot1.src)
}
