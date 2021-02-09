document.querySelector('#spinBtn').addEventListener('click', spin)
document.querySelector('#minBet').addEventListener('click', minBet)
document.querySelector('#maxBet').addEventListener('click', maxBet)

let isMinBet = false
let isMaxBet = false
let score = 1000
let jackpot = 5000
let isJackpot = false
let isMatchingThree = false

document.querySelector('h2').innerText = `Jackpot: ${jackpot}`
document.querySelector('#score').innerText = score

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
    isJackpot = false
    isMatchingThree = false

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
            console.log('i spun')
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
    checkForJackpot()
    updateScore()
    console.log("min bet should be true it is " + isMinBet)
    console.log("max bet should be false it is " + isMaxBet)
    // isMinBet = true
    // isMaxBet = false
    // minBet = document.querySelector("#minBet").className = ""
    // minBet = document.querySelector("#minBet").className += "betBorder "
    // maxBet = document.querySelector("#maxBet").className -= "betBorder "
    // maxBet = document.querySelector("#maxBet").className = ""

    // console.log(isMinBet, isMaxBet)
}
function maxBet() {
    isMinBet = false
    isMaxBet = true
    console.log("min bet should be false it is " + isMinBet)
    console.log("max bet should be true it is " + isMaxBet)
    maxBet = document.querySelector("#maxBet").className += ""
    maxBet = document.querySelector("#maxBet").className += "betBorder "
    minBet = document.querySelector("#minBet").className -= "betBorder "
    minBet = document.querySelector("#minBet").className = ""
    console.log(isMinBet, isMaxBet)
}

function updateScore() {
    console.log("JP is " + isJackpot)
    console.log("JM3P is " + isMatchingThree)

    if (isJackpot) {
        score += jackpot
        jackpot = 0
        document.querySelector('#score').innerText = score
        document.querySelector('h2').innerText = `Jackpot: ${jackpot}`

    } else if (isMatchingThree) {
        score += 2000
        jackpot = jackpot - 2000
        document.querySelector('#score').innerText = score
        document.querySelector('h2').innerText = `Jackpot: ${jackpot}`
    } else {
        jackpot += 25
        score -= 25
        document.querySelector('h2').innerText = `Jackpot: ${jackpot}`
        document.querySelector('#score').innerText = score
    }
}

function checkForJackpot() {
    let slot1 = document.querySelector('#img1').src
    let slot2 = document.getElementById('img2').src
    let slot3 = document.getElementById('img3').src

    //way too complicated to check for a jackpot
    let jpImage = slot1.split('/')
    let jpImageLength = jpImage.length
    console.log(jpImage[jpImageLength - 1])


    if (slot1 === slot2 && slot2 === slot3 && jpImage[jpImageLength - 1] === 'pokeball.svg') {
        isJackpot = true
        console.log('jackpot!!!')
        console.log("jackpot is " + isJackpot)
    } else if (slot1 === slot2 && slot2 === slot3) {
        console.log('matching 3')
        isMatchingThree = true
        console.log("matching 3  is " + isMatchingThree)
    }
}
