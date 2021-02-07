document.querySelector('button').addEventListener('click', spin)

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

    spin2win = setInterval(spin1, 50)
    spin2win2 = setInterval(spin2, 50)
    spin2win3 = setInterval(spin3, 50)

    console.log(slot1RandomNumber, slot2RandomNumber, slot3RandomNumber)


    function spin1() {

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
    function spin2() {
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
    function spin3() {
        testingNumber3++
        k++
        if (testingNumber3 >= slot3RandomNumber) {
            clearInterval(spin2win3)
        }

        if (k === 5) {
            k = 0
            slot3.src = arr[k]
        } else {
            slot3.src = arr[k]
        }
    }

}
