document.querySelector('button').addEventListener('click', spin)

function spin() {
    let randomNumber = Math.floor(Math.random() * 10 + 20)
    let randomNumber2 = Math.floor(Math.random() * 10 + 25)
    let slot1 = document.getElementById('img1')
    let slot2 = document.getElementById('img2')
    let arr = ['img/1.svg', 'img/2.svg', 'img/3.svg', 'img/4.svg', 'img/5.svg',]
    let testingNumber = 0
    let i = 0
    spin2win = setInterval(spin1, 50)
    spin2win2 = setInterval(spin2, 50)

    console.log(randomNumber)


    function spin1() {
        testingNumber++
        i++
        if (testingNumber >= randomNumber) {
            clearInterval(spin2win)
        }
        console.log(i)
        if (i === 5) {
            i = 0
            slot1.src = arr[i]
        } else {
            slot1.src = arr[i]
        }

    }
    function spin2() {
        testingNumber++
        i++
        if (testingNumber >= randomNumber2) {
            clearInterval(spin2win2)
        }
        console.log(i)
        if (i === 5) {
            i = 0
            slot2.src = arr[i]
        } else {
            slot2.src = arr[i]
        }

    }


    // let random = Math.floor(Math.random() * 5)
    // let random1 = Math.floor(Math.random() * 5)
    // let random2 = Math.floor(Math.random() * 5)
    // document.getElementById('img1').src = arr[random]
    // document.getElementById('img2').src = arr[random1]
    // document.getElementById('img3').src = arr[random2]

    // setInterval(function () {

    //     for (let i = 0; i <= 5; i++) {
    //         document.querySelector('img').src = "img/" + i + ".svg"
    //     }

    // }, 1000);

}
