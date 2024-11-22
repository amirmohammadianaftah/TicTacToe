const onePlayer = document.querySelector('.onePlayer')
const twoPlayer = document.querySelector('.twoPlayer')
const green = document.querySelector('.green')
const first = document.querySelector('.first')
const x = document.querySelector('.x')
const o = document.querySelector('.o')
const back = document.querySelector('.back')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const div = document.querySelectorAll('.third>.game>div')
const gameTable = document.querySelector('.third>.game')
let arr = []
let flag = true
let winnerX = 0
let winnerO = 0
const withFourth = document.querySelector('.withfourth')
const fourth = document.querySelector('.fourth')
let spanPlayer1 = document.querySelector('.spanPlayer1')
let spanPlayer2 = document.querySelector('.spanPlayer2')
const resetAll = document.querySelector('.resetAll')
let arrWinner = []

onePlayer.addEventListener('click', () => {
    third.style.zIndex = '-10'
    oneTotwo()
    x.addEventListener('click', () => {
        twoTothree()
        withFourth.style.zIndex = '20'
        onePlayerStartX()
    })
    o.addEventListener('click', () => {
        twoTothree()
        withFourth.style.zIndex = '20'
        onePlayerStartO()
    })
})

twoPlayer.addEventListener('click', () => {
    third.style.zIndex = '-10'
    oneTotwo()
    x.addEventListener('click', () => {
        twoTothree()
        twoPlayerStartX()
        withFourth.style.zIndex = '20'
    })
    o.addEventListener('click', () => {
        twoTothree()
        twoPlayerStartO()
        withFourth.style.zIndex = '20'
    })
})

function twoTothree() {
    second.style.zIndex = '-10'
    third.style.zIndex = '20'
}

// console.log(back);

back.addEventListener('click', () => {
    first.style.zIndex = '10'
    second.style.zIndex = '-10'
})

function oneTotwo() {
    first.style.zIndex = '-10'
    second.style.zIndex = '10'
}
function fourToone() {
    fourth.style.zIndex = '-10'
    second.style.zIndex = '-10'
    third.style.zIndex = '-10'
    first.style.zIndex = '10'
    withFourth.style.zIndex = '-20'
}

resetAll.addEventListener('click', () => {

    fourToone()
    location.reload();
})

// console.log(box);

function twoPlayerStartX() {
    div.forEach((val) => {
        val.addEventListener('click', () => {
            let temp = val.innerHTML
            // console.log(temp);
            if (temp == '') {
                if (flag) {
                    val.innerHTML = 'X'
                } else {
                    val.innerHTML = 'O'
                }
                flag = !flag
            }

            switch (true) {
                case (div[0].innerHTML != '') && (div[0].innerHTML == div[1].innerHTML && div[0].innerHTML == div[2].innerHTML): arr.push(0, 1, 2); break;
                case (div[3].innerHTML != '') && (div[3].innerHTML == div[4].innerHTML && div[3].innerHTML == div[5].innerHTML): arr.push(3, 4, 5); break;
                case (div[6].innerHTML != '') && (div[6].innerHTML == div[7].innerHTML && div[6].innerHTML == div[8].innerHTML): arr.push(6, 7, 8); break;
                case (div[0].innerHTML != '') && (div[0].innerHTML == div[3].innerHTML && div[0].innerHTML == div[6].innerHTML): arr.push(0, 3, 6); break;
                case (div[1].innerHTML != '') && (div[1].innerHTML == div[4].innerHTML && div[1].innerHTML == div[7].innerHTML): arr.push(1, 4, 7); break;
                case (div[2].innerHTML != '') && (div[2].innerHTML == div[5].innerHTML && div[2].innerHTML == div[8].innerHTML): arr.push(2, 5, 8); break;
                case (div[0].innerHTML != '') && (div[0].innerHTML == div[4].innerHTML && div[0].innerHTML == div[8].innerHTML): arr.push(0, 4, 8); break;
                case (div[2].innerHTML != '') && (div[2].innerHTML == div[4].innerHTML && div[2].innerHTML == div[6].innerHTML): arr.push(2, 4, 6); break;
            }
            console.log(arr);
            arr.forEach((item) => {
                div[item].style.background = 'black'
                div[item].style.color = 'aqua'
            })
            if (arr.length == 3) {
                gameTable.setAttribute('inert', true)

                if (div[arr[0]].innerHTML == 'X') {
                    winnerX++
                    spanPlayer1.innerHTML = winnerX
                    fourth.style.zIndex = '30'
                    fourth.innerHTML = 'Player 1 wins!!'
                    // fourth.style.transition = '1.5s'
                } else if (div[arr[0]].innerHTML == 'O') {
                    winnerO++
                    spanPlayer2.innerHTML = winnerO
                    fourth.style.zIndex = '30'
                    fourth.innerHTML = 'Player 2 wins!!'
                    // fourth.style.transition = '1.5s'
                }
                // console.log(winnerX);
                // console.log(winnerO);
                reset()
            }
            let num = 0
            div.forEach((val) => {
                if (val.innerHTML == '') {
                    num++
                }
            })
            if (num == 0 && arr.length != 3) {
                fourth.style.zIndex = '30'
                fourth.innerHTML = 'It was a draw'
                reset()
            }
            arr = []
        })
    })
}

function twoPlayerStartO() {
    div.forEach((val) => {
        val.addEventListener('click', () => {
            let temp = val.innerHTML
            // console.log(temp);
            if (temp == '') {
                if (flag) {
                    val.innerHTML = 'O'
                } else {
                    val.innerHTML = 'X'
                }
                flag = !flag
            }

            switch (true) {
                case (div[0].innerHTML != '') && (div[0].innerHTML == div[1].innerHTML && div[0].innerHTML == div[2].innerHTML): arr.push(0, 1, 2); break;
                case (div[3].innerHTML != '') && (div[3].innerHTML == div[4].innerHTML && div[3].innerHTML == div[5].innerHTML): arr.push(3, 4, 5); break;
                case (div[6].innerHTML != '') && (div[6].innerHTML == div[7].innerHTML && div[6].innerHTML == div[8].innerHTML): arr.push(6, 7, 8); break;
                case (div[0].innerHTML != '') && (div[0].innerHTML == div[3].innerHTML && div[0].innerHTML == div[6].innerHTML): arr.push(0, 3, 6); break;
                case (div[1].innerHTML != '') && (div[1].innerHTML == div[4].innerHTML && div[1].innerHTML == div[7].innerHTML): arr.push(1, 4, 7); break;
                case (div[2].innerHTML != '') && (div[2].innerHTML == div[5].innerHTML && div[2].innerHTML == div[8].innerHTML): arr.push(2, 5, 8); break;
                case (div[0].innerHTML != '') && (div[0].innerHTML == div[4].innerHTML && div[0].innerHTML == div[8].innerHTML): arr.push(0, 4, 8); break;
                case (div[2].innerHTML != '') && (div[2].innerHTML == div[4].innerHTML && div[2].innerHTML == div[6].innerHTML): arr.push(2, 4, 6); break;
            }
            console.log(arr);
            arr.forEach((item) => {
                div[item].style.background = 'black'
                div[item].style.color = 'aqua'
            })
            if (arr.length == 3) {
                gameTable.setAttribute('inert', true)

                if (div[arr[0]].innerHTML == 'X') {
                    winnerX++
                    spanPlayer2.innerHTML = winnerX
                    fourth.style.zIndex = '30'
                    fourth.innerHTML = 'Player 2 wins!!'
                    // fourth.style.transition = '1.5s'
                } else if (div[arr[0]].innerHTML == 'O') {
                    winnerO++
                    spanPlayer1.innerHTML = winnerO
                    fourth.style.zIndex = '30'
                    fourth.innerHTML = 'Player 1 wins!!'
                    // fourth.style.transition = '1.5s'
                }
                // console.log(winnerX);
                // console.log(winnerO);
                reset()
            }
            let num = 0
            div.forEach((val) => {
                if (val.innerHTML == '') {
                    num++
                }
            })
            if (num == 0 && arr.length != 3) {
                fourth.style.zIndex = '30'
                fourth.innerHTML = 'It was a draw'
                reset()
            }
            arr = []
        })
    })
}

function onePlayerStartX() {
    div.forEach((val, i) => {
        val.addEventListener('click', () => {
            let temp = val.innerHTML
            console.log(temp);

            if (temp == '') {
                if (val.getAttribute('data-status') == 'off') {
                    val.setAttribute('data-status', 'on')
                    // console.log(val, i);
                    val.innerHTML = 'X'
                    arr.push(i)
                    console.log(arr);
                    if (arr.length == 1) {
                        if (arr[0] == '4' || arr[0] == '1' || arr[0] == '3') {
                            div[0].innerHTML = 'O'
                            div[0].setAttribute('data-status', 'on')
                        }
                        if (arr[0] == '0' || arr[0] == '2' || arr[0] == '6' || arr[0] == '8') {
                            div[4].innerHTML = 'O'
                            div[4].setAttribute('data-status', 'on')
                        }
                        if (arr[0] == '5' || arr[0] == '7') {
                            div[8].innerHTML = 'O'
                            div[8].setAttribute('data-status', 'on')
                        }
                    }
                    if (arr.length == 2) {
                        if (arr[0] == '4') {
                            if (arr[1] == '1') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '2') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '5') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '6' || arr[1] == '8') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '7') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0') {
                            if (arr[1] == '1' || arr[1] == '5') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '2' || arr[1] == '8') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '3' || arr[1] == '7') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '6') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1') {
                            if (arr[1] == '2' || arr[1] == '3' || arr[1] == '5' || arr[1] == '6' || arr[1] == '7' || arr[1] == '8') {
                                div[4].innerHTML = 'O'
                                div[4].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '4') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2') {
                            if (arr[1] == '0') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '1' || arr[1] == '3' || arr[1] == '7') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '5') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '8') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '6') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3') {
                            if (arr[1] == '4') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '8') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '5' || arr[1] == '1' || arr[1] == '2' || arr[1] == '7' || arr[1] == '6') {
                                div[4].innerHTML = 'O'
                                div[4].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5') {
                            if (arr[1] == '0' || arr[1] == '1' || arr[1] == '2') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '4') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '3' || arr[1] == '7' || arr[1] == '6') {
                                div[4].innerHTML = 'O'
                                div[4].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6') {
                            if (arr[1] == '0') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '1' || arr[1] == '3') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '7' || arr[1] == '5') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '8') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '2') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7') {
                            if (arr[1] == '2' || arr[1] == '3' || arr[1] == '5' || arr[1] == '1') {
                                div[4].innerHTML = 'O'
                                div[4].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '4') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '0') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '6') {
                                div[4].innerHTML = 'O'
                                div[4].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8') {
                            if (arr[1] == '1' || arr[1] == '3') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '0') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '2') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '5') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '6') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '7') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                    }
                    if (arr.length == 3) {
                        if (arr[0] == '0' && arr[1] == '1') {
                            if (arr[2] == '3' || arr[2] == '5' || arr[2] == '7' || arr[2] == '8') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerO++
                            }
                            if (arr[2] == '6') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '2') {
                            if (arr[2] == '3' || arr[2] == '5' || arr[2] == '6' || arr[2] == '8') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerO++
                            }
                            if (arr[2] == '7') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '5') {
                            if (arr[2] == '3' || arr[2] == '1' || arr[2] == '7' || arr[2] == '8') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerO++
                            }
                            if (arr[2] == '6') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '7') {
                            if (arr[2] == '3' || arr[2] == '1' || arr[2] == '5' || arr[2] == '8') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerO++
                            }
                            if (arr[2] == '2') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '6') {
                            if (arr[2] == '2' || arr[2] == '1' || arr[2] == '7' || arr[2] == '8') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                                arrWinner.push(3, 4, 5)
                                winnerO++
                            }
                            if (arr[2] == '5') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '3') {
                            if (arr[2] == '1' || arr[2] == '5' || arr[2] == '7' || arr[2] == '8') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerX++
                            }
                            if (arr[2] == '2') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '8') {
                            if (arr[2] == '2' || arr[2] == '3' || arr[2] == '5' || arr[2] == '6') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerO++
                            }
                            if (arr[2] == '7') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '2') {
                            if (arr[2] == '7' || arr[2] == '3' || arr[2] == '5' || arr[2] == '6') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '8') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '3') {
                            if (arr[2] == '7' || arr[2] == '2' || arr[2] == '5' || arr[2] == '6') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '8') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '6') {
                            if (arr[2] == '7' || arr[2] == '2' || arr[2] == '5' || arr[2] == '3') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '8') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '7') {
                            if (arr[2] == '6' || arr[2] == '2' || arr[2] == '5' || arr[2] == '3') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '8') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '8') {
                            if (arr[2] == '3' || arr[2] == '7') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '2') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '6') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '5') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '5') {
                            if (arr[2] != '8') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 4, 8)
                            }
                            if (arr[2] == '8') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '4') {
                            if (arr[2] == '8') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '2') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '6') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '5') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '0') {
                            if (arr[2] == '3' || arr[2] == '5' || arr[2] == '6' || arr[2] == '8') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerO++
                            }
                            if (arr[2] == '7') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '1') {
                            if (arr[2] == '1' || arr[2] == '5' || arr[2] == '6' || arr[2] == '7') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '8') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '5') {
                            if (arr[2] == '1' || arr[2] == '3' || arr[2] == '6' || arr[2] == '7') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '0') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '7') {
                            if (arr[2] == '1' || arr[2] == '3' || arr[2] == '6' || arr[2] == '5') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '8') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '8') {
                            if (arr[2] == '1' || arr[2] == '0' || arr[2] == '6' || arr[2] == '7') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                                arrWinner.push(3, 4, 5)
                                winnerO++
                            }
                            if (arr[2] == '3') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '6') {
                            if (arr[2] == '3' || arr[2] == '0' || arr[2] == '5' || arr[2] == '8') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerO++
                            }
                            if (arr[2] == '1') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '1') {
                            if (arr[2] == '2' || arr[2] == '5' || arr[2] == '6' || arr[2] == '7') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '8') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '2') {
                            if (arr[2] == '1' || arr[2] == '5' || arr[2] == '6' || arr[2] == '7') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '8') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '4') {
                            if (arr[2] == '1') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '2') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '6' || arr[2] == '8') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '7') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '5') {
                            if (arr[2] == '1' || arr[2] == '2' || arr[2] == '6' || arr[2] == '7') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '8') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '6') {
                            if (arr[2] == '1' || arr[2] == '2' || arr[2] == '5' || arr[2] == '7') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '8') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '7') {
                            if (arr[2] == '1' || arr[2] == '2' || arr[2] == '5' || arr[2] == '6') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '8') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '8') {
                            if (arr[2] == '4' || arr[2] == '7' || arr[2] == '5' || arr[2] == '6') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                                arrWinner.push(0, 1, 2)
                                winnerO++
                            }
                            if (arr[2] == '1') {
                                div[4].innerHTML = 'O'
                                div[4].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '1') {
                            if (arr[2] == '2') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '5') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '6') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '8') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '2') {
                            if (arr[2] == '1' || arr[2] == '7' || arr[2] == '5' || arr[2] == '8') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                                arrWinner.push(0, 3, 6)
                                winnerO++
                            }
                            if (arr[2] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '3') {
                            if (arr[2] == '1') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '2') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '6') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '7') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '8') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '5') {
                            if (arr[2] == '1' || arr[2] == '7' || arr[2] == '2' || arr[2] == '8') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                                arrWinner.push(0, 3, 6)
                                winnerO++
                            }
                            if (arr[2] == '6') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '6') {
                            if (arr[2] == '3' || arr[2] == '7' || arr[2] == '5' || arr[2] == '8') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                                arrWinner.push(0, 1, 2)
                                winnerO++
                            }
                            if (arr[2] == '1') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '7') {
                            if (arr[2] == '3' || arr[2] == '6' || arr[2] == '5' || arr[2] == '8') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(0, 1, 2)
                                winnerO++
                            }
                            if (arr[2] == '2') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '8') {
                            if (arr[2] == '3' || arr[2] == '6' || arr[2] == '5' || arr[2] == '7') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                                arrWinner.push(0, 1, 2)
                                winnerO++
                            }
                            if (arr[2] == '1') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '0') {
                            if (arr[2] == '3' || arr[2] == '1' || arr[2] == '2' || arr[2] == '4') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(6, 7, 8)
                                winnerO++
                            }
                            if (arr[2] == '7') {
                                div[4].innerHTML = 'O'
                                div[4].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '1') {
                            if (arr[2] == '3' || arr[2] == '0' || arr[2] == '2' || arr[2] == '4') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(6, 7, 8)
                                winnerO++
                            }
                            if (arr[2] == '7') {
                                div[4].innerHTML = 'O'
                                div[4].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '2') {
                            if (arr[2] == '3' || arr[2] == '0' || arr[2] == '1' || arr[2] == '4') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(6, 7, 8)
                                winnerO++
                            }
                            if (arr[2] == '7') {
                                div[4].innerHTML = 'O'
                                div[4].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '3') {
                            if (arr[2] == '6' || arr[2] == '1' || arr[2] == '2' || arr[2] == '7') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '0') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '4') {
                            if (arr[2] == '0') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '1') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '2') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '6') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '7') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '6') {
                            if (arr[2] == '3' || arr[2] == '1' || arr[2] == '2' || arr[2] == '7') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '0') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '7') {
                            if (arr[2] == '3' || arr[2] == '1' || arr[2] == '2' || arr[2] == '6') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '0') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '0') {
                            if (arr[2] == '7' || arr[2] == '1' || arr[2] == '2' || arr[2] == '8') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                                arrWinner.push(3, 4, 5)
                                winnerO++
                            }
                            if (arr[2] == '5') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '1') {
                            if (arr[2] == '7' || arr[2] == '3' || arr[2] == '2' || arr[2] == '5') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '8') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '2') {
                            if (arr[2] == '0' || arr[2] == '3' || arr[2] == '5' || arr[2] == '8') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerO++
                            }
                            if (arr[2] == '7') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '3') {
                            if (arr[2] == '1' || arr[2] == '2' || arr[2] == '5' || arr[2] == '7') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '8') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '5') {
                            if (arr[2] == '1' || arr[2] == '2' || arr[2] == '3' || arr[2] == '7') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '0') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '7') {
                            if (arr[2] == '1' || arr[2] == '2' || arr[2] == '3' || arr[2] == '5') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '0') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '8') {
                            if (arr[2] == '0' || arr[2] == '2' || arr[2] == '3' || arr[2] == '5') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerO++
                            }
                            if (arr[2] == '1') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '0') {
                            if (arr[2] == '1' || arr[2] == '4' || arr[2] == '3' || arr[2] == '6') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                                arrWinner.push(2, 5, 8)
                                winnerO++
                            }
                            if (arr[2] == '5') {
                                div[4].innerHTML = 'O'
                                div[4].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '1') {
                            if (arr[2] == '2' || arr[2] == '5' || arr[2] == '3' || arr[2] == '6') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '0') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '2') {
                            if (arr[2] == '1' || arr[2] == '5' || arr[2] == '3' || arr[2] == '6') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '0') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '3') {
                            if (arr[2] == '1' || arr[2] == '5' || arr[2] == '2' || arr[2] == '6') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '0') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '4') {
                            if (arr[2] == '0') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '2') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '5') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '6') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '5') {
                            if (arr[2] == '1' || arr[2] == '3' || arr[2] == '2' || arr[2] == '6') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '0') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '6') {
                            if (arr[2] == '1' || arr[2] == '3' || arr[2] == '2' || arr[2] == '4') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerO++
                            }
                            if (arr[2] == '0') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '0') {
                            if (arr[2] == '5' || arr[2] == '3' || arr[2] == '2' || arr[2] == '6') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerO++
                            }
                            if (arr[2] == '1') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '1') {
                            if (arr[2] == '5' || arr[2] == '3' || arr[2] == '0' || arr[2] == '7') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerO++
                            }
                            if (arr[2] == '2') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '2') {
                            if (arr[2] == '1' || arr[2] == '6' || arr[2] == '0' || arr[2] == '7') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                                arrWinner.push(3, 4, 5)
                                winnerO++
                            }
                            if (arr[2] == '3') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '3') {
                            if (arr[2] == '1' || arr[2] == '5' || arr[2] == '0' || arr[2] == '7') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerO++
                            }
                            if (arr[2] == '2') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '5') {
                            if (arr[2] == '1' || arr[2] == '3' || arr[2] == '0' || arr[2] == '7') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerO++
                            }
                            if (arr[2] == '6') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '6') {
                            if (arr[2] == '2' || arr[2] == '3' || arr[2] == '0' || arr[2] == '5') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerO++
                            }
                            if (arr[2] == '1') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '7') {
                            if (arr[2] == '1' || arr[2] == '3' || arr[2] == '0' || arr[2] == '5') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerO++
                            }
                            if (arr[2] == '2') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                    }
                    if (arr.length == 4) {
                        if (arr[0] == '0' && arr[1] == '1' && arr[2] == '6') {
                            if (arr[3] == '7' || arr[3] == '8') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                                arrWinner.push(3, 4, 5)
                                winnerO++
                            }
                            if (arr[3] == '5') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '2' && arr[2] == '7') {
                            if (arr[3] == '6' || arr[3] == '8') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                                arrWinner.push(3, 4, 5)
                                winnerO++
                            }
                            if (arr[3] == '5') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '5' && arr[2] == '6') {
                            if (arr[3] == '7') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '8') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '1') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '7' && arr[2] == '2') {
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '5') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '8') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '6' && arr[2] == '5') {
                            if (arr[3] == '2' || arr[3] == '8') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerO++
                            }
                            if (arr[3] == '7') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '8' && arr[2] == '7') {
                            if (arr[3] == '3' || arr[3] == '5') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerO++
                            }
                            if (arr[3] == '2') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '3' && arr[2] == '2') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerO++
                            }
                            if (arr[3] == '7') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '2' && arr[2] == '8') {
                            if (arr[3] == '6' || arr[3] == '7') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                                arrWinner.push(3, 4, 5)
                                winnerO++
                            }
                            if (arr[3] == '3') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '3' && arr[2] == '8') {
                            if (arr[3] == '5' || arr[3] == '7') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerO++
                            }
                            if (arr[3] == '2') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '6' && arr[2] == '8') {
                            if (arr[3] == '2' || arr[3] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '5') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '7' && arr[2] == '8') {
                            if (arr[3] == '2') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                                arrWinner.push(0, 3, 6)
                                winnerO++
                            }
                            if (arr[3] == '3') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerO++
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '8' && arr[2] == '3') {
                            if (arr[3] == '6' || arr[3] == '7') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                                arrWinner.push(0, 3, 6)
                                winnerO++
                            }
                            if (arr[3] == '3') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '8' && arr[2] == '7') {
                            if (arr[3] == '3' || arr[3] == '5') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerO++
                            }
                            if (arr[3] == '2') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '8' && arr[2] == '2') {
                            if (arr[3] == '7' || arr[3] == '8') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                                arrWinner.push(3, 4, 5)
                                winnerO++
                            }
                            if (arr[3] == '3') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '8' && arr[2] == '6') {
                            if (arr[3] == '3' || arr[3] == '5') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '2') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '8' && arr[2] == '5') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerO++
                            }
                            if (arr[3] == '6') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '4' && arr[2] == '8') {
                            if (arr[3] != '3') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(0, 3, 6)
                                winnerO++
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '4' && arr[2] == '2') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                                arrWinner.push(0, 3, 6)
                                winnerO++
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '4' && arr[2] == '6') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '4' && arr[2] == '5') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                                arrWinner.push(0, 3, 6)
                                winnerO++
                            }
                            if (arr[3] == '6') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '5' && arr[2] == '8') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerO++
                            }
                            if (arr[3] == '6') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '4' && arr[2] == '3') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '6') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '0' && arr[2] == '7') {
                            if (arr[3] != '5') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(3, 4, 5)
                            }
                            if (arr[3] == '5') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '1' && arr[2] == '8') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 3, 6)
                            }
                            if (arr[3] == '3') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '5' && arr[2] == '0') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(1, 4, 7)
                            }
                            if (arr[3] == '7') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '7' && arr[2] == '8') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 3, 6)
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '8' && arr[2] == '3') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(1, 4, 7)
                            }
                            if (arr[3] == '7') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '6' && arr[2] == '1') {
                            if (arr[3] != '8') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 4, 8)
                            }
                            if (arr[3] == '8') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '2' && arr[2] == '8') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '6') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '4' && arr[2] == '1') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '2') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '4' && arr[2] == '2') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '7') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '4' && arr[2] == '6') {
                            if (arr[3] != '8') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(2, 5, 8)
                            }
                            if (arr[3] == '8') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '4' && arr[2] == '7') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 1, 2)
                            }
                            if (arr[3] == '2') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '4' && arr[2] == '8') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 1, 2)
                            }
                            if (arr[3] == '1') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '5' && arr[2] == '8') {
                            if (arr[3] == '1') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '6') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '7') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(2, 4, 6)
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '6' && arr[2] == '8') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(1, 4, 7)
                            }
                            if (arr[3] == '1') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '7' && arr[2] == '8') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '2') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '8' && arr[2] == '1') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '6') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '1' && arr[2] == '2') {
                            if (arr[3] == '3') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(6, 7, 8)
                            }
                            if (arr[3] == '8') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 3, 6)
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '1' && arr[2] == '3') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '2') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '1' && arr[2] == '8') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '2') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '1' && arr[2] == '5') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 3, 6)
                            }
                            if (arr[3] == '6') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '1' && arr[2] == '6') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '1' && arr[2] == '8') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 3, 6)
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '2' && arr[2] == '3') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '7') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '5' && arr[2] == '6') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 1, 2)
                            }
                            if (arr[3] == '1') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '7' && arr[2] == '2') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 3, 6)
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '3' && arr[2] == '1') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '2') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '3' && arr[2] == '2') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '7') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '3' && arr[2] == '6') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 1, 2)
                            }
                            if (arr[3] == '1') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '3' && arr[2] == '7') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 1, 2)
                            }
                            if (arr[3] == '2') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '3' && arr[2] == '8') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 1, 2)
                            }
                            if (arr[3] == '1') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '6' && arr[2] == '1') {
                            if (arr[3] != '5') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '5') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '8' && arr[2] == '1') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '0' && arr[2] == '7') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '2') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '1' && arr[2] == '7') {
                            if (arr[3] == '0') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '2') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 4, 6)
                            }
                            if (arr[3] == '3') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 4, 6)
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '2' && arr[2] == '7') {
                            if (arr[3] != '0') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 4, 8)
                            }
                            if (arr[3] == '0') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '3' && arr[2] == '0') {
                            if (arr[3] == '2') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(6, 7, 8)
                            }
                            if (arr[3] == '7') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '1') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(2, 4, 6)
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '4' && arr[2] == '0') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(1, 4, 7)
                            }
                            if (arr[3] == '7') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '4' && arr[2] == '1') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(6, 7, 8)
                            }
                            if (arr[3] == '6') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '4' && arr[2] == '2') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(6, 7, 8)
                            }
                            if (arr[3] == '7') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '4' && arr[2] == '6') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '1') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '4' && arr[2] == '7') {
                            if (arr[3] != '0') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '0') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '6' && arr[2] == '0') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '1') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '7' && arr[2] == '0') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '2') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '0' && arr[2] == '5') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(1, 4, 7)
                            }
                            if (arr[3] == '1') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '1' && arr[2] == '8') {
                            if (arr[3] != '5') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '5') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '2' && arr[2] == '7') {
                            if (arr[3] != '0') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 4, 8)
                            }
                            if (arr[3] == '0') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '3' && arr[2] == '8') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(1, 4, 7)
                            }
                            if (arr[3] == '1') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '5' && arr[2] == '0') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '1') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '7' && arr[2] == '0') {
                            if (arr[3] != '5') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(3, 4, 5)
                            }
                            if (arr[3] == '5') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '8' && arr[2] == '1') {
                            if (arr[3] != '5') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(3, 4, 5)
                            }
                            if (arr[3] == '5') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '0' && arr[2] == '5') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '6') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '1' && arr[2] == '0') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '6') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '2' && arr[2] == '0') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '3') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '3' && arr[2] == '0') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '2') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '4' && arr[2] == '0') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '4' && arr[2] == '2') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '4' && arr[2] == '3') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '2') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '4' && arr[2] == '5') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '2') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '4' && arr[2] == '6') {
                            if (arr[3] != '0') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 1, 2)
                            }
                            if (arr[3] == '0') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '5' && arr[2] == '0') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '2') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '6' && arr[2] == '0') {
                            if (arr[3] != '5') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(3, 4, 5)
                            }
                            if (arr[3] == '5') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '0' && arr[2] == '1') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '3') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '1' && arr[2] == '2') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 3, 6)
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '2' && arr[2] == '3') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'O'
                                div[7].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(1, 4, 7)
                            }
                            if (arr[3] == '7') {
                                div[6].innerHTML = 'O'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '3' && arr[2] == '2') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '1') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '5' && arr[2] == '6') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'O'
                                div[1].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(1, 4, 7)
                            }
                            if (arr[3] == '1') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '6' && arr[2] == '1') {
                            if (arr[3] != '5') {
                                div[5].innerHTML = 'O'
                                div[5].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(3, 4, 5)
                            }
                            if (arr[3] == '5') {
                                div[2].innerHTML = 'O'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '7' && arr[2] == '2') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(3, 4, 5)
                            }
                            if (arr[3] == '3') {
                                div[0].innerHTML = 'O'
                                div[0].setAttribute('data-status', 'on')
                            }
                        }
                    }
                }
                arrWinner.forEach((item) => {
                    div[item].style.background = 'black'
                    div[item].style.color = 'aqua'
                })
                if (arrWinner.length == 3) {
                    gameTable.setAttribute('inert', true)

                    if (div[arrWinner[0]].innerHTML == 'X') {
                        spanPlayer1.innerHTML = winnerX
                        fourth.style.zIndex = '30'
                        fourth.innerHTML = 'Player 1 wins!!'
                        // fourth.style.transition = '1.5s'
                    } else if (div[arrWinner[0]].innerHTML == 'O') {
                        spanPlayer2.innerHTML = winnerO
                        fourth.style.zIndex = '30'
                        fourth.innerHTML = 'Player 2 wins!!'
                        // fourth.style.transition = '1.5s'
                    }
                    // console.log(winnerX);
                    // console.log(winnerO);
                    reset()
                    arrWinner = []
                }
                let num = 0
                div.forEach((val) => {
                    if (val.innerHTML == '') {
                        num++
                    }
                })
                if (num == 0 && arrWinner.length != 3) {
                    fourth.style.zIndex = '30'
                    fourth.innerHTML = 'It was a draw'
                    reset()
                }
                console.log(arrWinner);
            }
        })
    })
}

function onePlayerStartO() {
    div.forEach((val, i) => {
        val.addEventListener('click', () => {
            let temp = val.innerHTML
            console.log(temp);

            if (temp == '') {
                if (val.getAttribute('data-status') == 'off') {
                    val.setAttribute('data-status', 'on')
                    // console.log(val, i);
                    val.innerHTML = 'O'
                    arr.push(i)
                    console.log(arr);
                    if (arr.length == 1) {
                        if (arr[0] == '4' || arr[0] == '1' || arr[0] == '3') {
                            div[0].innerHTML = 'X'
                            div[0].setAttribute('data-status', 'on')
                        }
                        if (arr[0] == '0' || arr[0] == '2' || arr[0] == '6' || arr[0] == '8') {
                            div[4].innerHTML = 'X'
                            div[4].setAttribute('data-status', 'on')
                        }
                        if (arr[0] == '5' || arr[0] == '7') {
                            div[8].innerHTML = 'X'
                            div[8].setAttribute('data-status', 'on')
                        }
                    }
                    if (arr.length == 2) {
                        if (arr[0] == '4') {
                            if (arr[1] == '1') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '2') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '5') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '6' || arr[1] == '8') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '7') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0') {
                            if (arr[1] == '1' || arr[1] == '5') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '2' || arr[1] == '8') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '3' || arr[1] == '7') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '6') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1') {
                            if (arr[1] == '2' || arr[1] == '3' || arr[1] == '5' || arr[1] == '6' || arr[1] == '7' || arr[1] == '8') {
                                div[4].innerHTML = 'X'
                                div[4].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '4') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2') {
                            if (arr[1] == '0') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '1' || arr[1] == '3' || arr[1] == '7') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '5') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '8') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '6') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3') {
                            if (arr[1] == '4') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '8') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '5' || arr[1] == '1' || arr[1] == '2' || arr[1] == '7' || arr[1] == '6') {
                                div[4].innerHTML = 'X'
                                div[4].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5') {
                            if (arr[1] == '0' || arr[1] == '1' || arr[1] == '2') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '4') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '3' || arr[1] == '7' || arr[1] == '6') {
                                div[4].innerHTML = 'X'
                                div[4].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6') {
                            if (arr[1] == '0') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '1' || arr[1] == '3') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '7' || arr[1] == '5') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '8') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '2') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7') {
                            if (arr[1] == '2' || arr[1] == '3' || arr[1] == '5' || arr[1] == '1') {
                                div[4].innerHTML = 'X'
                                div[4].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '4') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '0') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '6') {
                                div[4].innerHTML = 'X'
                                div[4].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8') {
                            if (arr[1] == '1' || arr[1] == '3') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '0') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '2') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '5') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '6') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[1] == '7') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                    }
                    if (arr.length == 3) {
                        if (arr[0] == '0' && arr[1] == '1') {
                            if (arr[2] == '3' || arr[2] == '5' || arr[2] == '7' || arr[2] == '8') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerX++
                            }
                            if (arr[2] == '6') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '2') {
                            if (arr[2] == '3' || arr[2] == '5' || arr[2] == '6' || arr[2] == '8') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerX++
                            }
                            if (arr[2] == '7') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '3') {
                            if (arr[2] == '1' || arr[2] == '5' || arr[2] == '7' || arr[2] == '8') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerX++
                            }
                            if (arr[2] == '2') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '5') {
                            if (arr[2] == '3' || arr[2] == '1' || arr[2] == '7' || arr[2] == '8') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerX++
                            }
                            if (arr[2] == '6') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '7') {
                            if (arr[2] == '3' || arr[2] == '1' || arr[2] == '5' || arr[2] == '8') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerX++
                            }
                            if (arr[2] == '2') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '6') {
                            if (arr[2] == '2' || arr[2] == '1' || arr[2] == '7' || arr[2] == '8') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                                arrWinner.push(3, 4, 5)
                                winnerX++
                            }
                            if (arr[2] == '5') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '8') {
                            if (arr[2] == '2' || arr[2] == '3' || arr[2] == '5' || arr[2] == '6') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerX++
                            }
                            if (arr[2] == '7') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '2') {
                            if (arr[2] == '7' || arr[2] == '3' || arr[2] == '5' || arr[2] == '6') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '8') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '3') {
                            if (arr[2] == '7' || arr[2] == '2' || arr[2] == '5' || arr[2] == '6') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '8') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '6') {
                            if (arr[2] == '7' || arr[2] == '2' || arr[2] == '5' || arr[2] == '3') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '8') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '7') {
                            if (arr[2] == '6' || arr[2] == '2' || arr[2] == '5' || arr[2] == '3') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '8') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '8') {
                            if (arr[2] == '3' || arr[2] == '7') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '2') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '6') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '5') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '5') {
                            if (arr[2] != '8') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 4, 8)
                            }
                            if (arr[2] == '8') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '4') {
                            if (arr[2] == '8') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '2') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '6') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '5') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '0') {
                            if (arr[2] == '3' || arr[2] == '5' || arr[2] == '6' || arr[2] == '8') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerX++
                            }
                            if (arr[2] == '7') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '1') {
                            if (arr[2] == '1' || arr[2] == '5' || arr[2] == '6' || arr[2] == '7') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '8') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '5') {
                            if (arr[2] == '1' || arr[2] == '3' || arr[2] == '6' || arr[2] == '7') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '0') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '7') {
                            if (arr[2] == '1' || arr[2] == '3' || arr[2] == '6' || arr[2] == '5') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '8') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '8') {
                            if (arr[2] == '1' || arr[2] == '0' || arr[2] == '6' || arr[2] == '7') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                                arrWinner.push(3, 4, 5)
                                winnerX++
                            }
                            if (arr[2] == '3') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '6') {
                            if (arr[2] == '3' || arr[2] == '0' || arr[2] == '5' || arr[2] == '8') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerX++
                            }
                            if (arr[2] == '1') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '1') {
                            if (arr[2] == '2' || arr[2] == '5' || arr[2] == '6' || arr[2] == '7') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '8') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '2') {
                            if (arr[2] == '1' || arr[2] == '5' || arr[2] == '6' || arr[2] == '7') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '8') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '4') {
                            if (arr[2] == '1') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '2') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '6' || arr[2] == '8') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '7') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '5') {
                            if (arr[2] == '1' || arr[2] == '2' || arr[2] == '6' || arr[2] == '7') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '8') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '6') {
                            if (arr[2] == '1' || arr[2] == '2' || arr[2] == '5' || arr[2] == '7') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '8') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '7') {
                            if (arr[2] == '1' || arr[2] == '2' || arr[2] == '5' || arr[2] == '6') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '8') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '8') {
                            if (arr[2] == '4' || arr[2] == '7' || arr[2] == '5' || arr[2] == '6') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                                arrWinner.push(0, 1, 2)
                                winnerX++
                            }
                            if (arr[2] == '1') {
                                div[4].innerHTML = 'X'
                                div[4].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '1') {
                            if (arr[2] == '2') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '5') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '6') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '8') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '2') {
                            if (arr[2] == '1' || arr[2] == '7' || arr[2] == '5' || arr[2] == '8') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                                arrWinner.push(0, 3, 6)
                                winnerX++
                            }
                            if (arr[2] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '3') {
                            if (arr[2] == '1') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '2') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '6') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '7') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '8') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '5') {
                            if (arr[2] == '1' || arr[2] == '7' || arr[2] == '2' || arr[2] == '8') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                                arrWinner.push(0, 3, 6)
                                winnerX++
                            }
                            if (arr[2] == '6') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '6') {
                            if (arr[2] == '3' || arr[2] == '7' || arr[2] == '5' || arr[2] == '8') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                                arrWinner.push(0, 1, 2)
                                winnerX++
                            }
                            if (arr[2] == '1') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '7') {
                            if (arr[2] == '3' || arr[2] == '6' || arr[2] == '5' || arr[2] == '8') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(0, 1, 2)
                                winnerX++
                            }
                            if (arr[2] == '2') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '8') {
                            if (arr[2] == '3' || arr[2] == '6' || arr[2] == '5' || arr[2] == '7') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                                arrWinner.push(0, 1, 2)
                                winnerX++
                            }
                            if (arr[2] == '1') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '0') {
                            if (arr[2] == '3' || arr[2] == '1' || arr[2] == '2' || arr[2] == '4') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(6, 7, 8)
                                winnerX++
                            }
                            if (arr[2] == '7') {
                                div[4].innerHTML = 'X'
                                div[4].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '1') {
                            if (arr[2] == '3' || arr[2] == '0' || arr[2] == '2' || arr[2] == '4') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(6, 7, 8)
                                winnerX++
                            }
                            if (arr[2] == '7') {
                                div[4].innerHTML = 'X'
                                div[4].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '2') {
                            if (arr[2] == '3' || arr[2] == '0' || arr[2] == '1' || arr[2] == '4') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(6, 7, 8)
                                winnerX++
                            }
                            if (arr[2] == '7') {
                                div[4].innerHTML = 'X'
                                div[4].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '3') {
                            if (arr[2] == '6' || arr[2] == '1' || arr[2] == '2' || arr[2] == '7') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '0') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '4') {
                            if (arr[2] == '0') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '1') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '2') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '6') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '7') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '6') {
                            if (arr[2] == '3' || arr[2] == '1' || arr[2] == '2' || arr[2] == '7') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '0') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '7') {
                            if (arr[2] == '3' || arr[2] == '1' || arr[2] == '2' || arr[2] == '6') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '0') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '0') {
                            if (arr[2] == '7' || arr[2] == '1' || arr[2] == '2' || arr[2] == '8') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                                arrWinner.push(3, 4, 5)
                                winnerX++
                            }
                            if (arr[2] == '5') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '1') {
                            if (arr[2] == '7' || arr[2] == '3' || arr[2] == '2' || arr[2] == '5') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '8') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '2') {
                            if (arr[2] == '0' || arr[2] == '3' || arr[2] == '5' || arr[2] == '8') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerX++
                            }
                            if (arr[2] == '7') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '3') {
                            if (arr[2] == '1' || arr[2] == '2' || arr[2] == '5' || arr[2] == '7') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '8') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '5') {
                            if (arr[2] == '1' || arr[2] == '2' || arr[2] == '3' || arr[2] == '7') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '0') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '7') {
                            if (arr[2] == '1' || arr[2] == '2' || arr[2] == '3' || arr[2] == '5') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '0') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '8') {
                            if (arr[2] == '0' || arr[2] == '2' || arr[2] == '3' || arr[2] == '5') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerX++
                            }
                            if (arr[2] == '1') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '0') {
                            if (arr[2] == '1' || arr[2] == '4' || arr[2] == '3' || arr[2] == '6') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                                arrWinner.push(2, 5, 8)
                                winnerX++
                            }
                            if (arr[2] == '5') {
                                div[4].innerHTML = 'X'
                                div[4].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '1') {
                            if (arr[2] == '2' || arr[2] == '5' || arr[2] == '3' || arr[2] == '6') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '0') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '2') {
                            if (arr[2] == '1' || arr[2] == '5' || arr[2] == '3' || arr[2] == '6') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '0') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '3') {
                            if (arr[2] == '1' || arr[2] == '5' || arr[2] == '2' || arr[2] == '6') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '0') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '4') {
                            if (arr[2] == '0') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '2') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '5') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[2] == '6') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '5') {
                            if (arr[2] == '1' || arr[2] == '3' || arr[2] == '2' || arr[2] == '6') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '0') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '6') {
                            if (arr[2] == '1' || arr[2] == '3' || arr[2] == '2' || arr[2] == '4') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                                arrWinner.push(0, 4, 8)
                                winnerX++
                            }
                            if (arr[2] == '0') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '0') {
                            if (arr[2] == '5' || arr[2] == '3' || arr[2] == '2' || arr[2] == '6') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerX++
                            }
                            if (arr[2] == '1') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '1') {
                            if (arr[2] == '5' || arr[2] == '3' || arr[2] == '0' || arr[2] == '7') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerX++
                            }
                            if (arr[2] == '2') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '2') {
                            if (arr[2] == '1' || arr[2] == '6' || arr[2] == '0' || arr[2] == '7') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                                arrWinner.push(3, 4, 5)
                                winnerX++
                            }
                            if (arr[2] == '3') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '3') {
                            if (arr[2] == '1' || arr[2] == '5' || arr[2] == '0' || arr[2] == '7') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerX++
                            }
                            if (arr[2] == '2') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '5') {
                            if (arr[2] == '1' || arr[2] == '3' || arr[2] == '0' || arr[2] == '7') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerX++
                            }
                            if (arr[2] == '6') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '6') {
                            if (arr[2] == '2' || arr[2] == '3' || arr[2] == '0' || arr[2] == '5') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerX++
                            }
                            if (arr[2] == '1') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '7') {
                            if (arr[2] == '1' || arr[2] == '3' || arr[2] == '0' || arr[2] == '5') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerX++
                            }
                            if (arr[2] == '2') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                    }
                    if (arr.length == 4) {
                        if (arr[0] == '0' && arr[1] == '1' && arr[2] == '6') {
                            if (arr[3] == '7' || arr[3] == '8') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                                arrWinner.push(3, 4, 5)
                                winnerX++
                            }
                            if (arr[3] == '5') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '2' && arr[2] == '7') {
                            if (arr[3] == '6' || arr[3] == '8') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                                arrWinner.push(3, 4, 5)
                                winnerX++
                            }
                            if (arr[3] == '5') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '5' && arr[2] == '6') {
                            if (arr[3] == '7') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '8') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '1') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '3' && arr[2] == '2') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerO++
                            }
                            if (arr[3] == '7') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '7' && arr[2] == '2') {
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '5') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '8') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '6' && arr[2] == '5') {
                            if (arr[3] == '2' || arr[3] == '8') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                                arrWinner.push(1, 4, 7)
                                winnerX++
                            }
                            if (arr[3] == '7') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '0' && arr[1] == '8' && arr[2] == '7') {
                            if (arr[3] == '3' || arr[3] == '5') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerX++
                            }
                            if (arr[3] == '2') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '2' && arr[2] == '8') {
                            if (arr[3] == '6' || arr[3] == '7') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                                arrWinner.push(3, 4, 5)
                                winnerX++
                            }
                            if (arr[3] == '3') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '3' && arr[2] == '8') {
                            if (arr[3] == '5' || arr[3] == '7') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerX++
                            }
                            if (arr[3] == '2') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '6' && arr[2] == '8') {
                            if (arr[3] == '2' || arr[3] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '5') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '7' && arr[2] == '8') {
                            if (arr[3] == '2') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                                arrWinner.push(0, 3, 6)
                                winnerX++
                            }
                            if (arr[3] == '3') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerX++
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '8' && arr[2] == '3') {
                            if (arr[3] == '6' || arr[3] == '7') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                                arrWinner.push(0, 3, 6)
                                winnerX++
                            }
                            if (arr[3] == '3') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '8' && arr[2] == '7') {
                            if (arr[3] == '3' || arr[3] == '5') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerX++
                            }
                            if (arr[3] == '2') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '8' && arr[2] == '2') {
                            if (arr[3] == '7' || arr[3] == '8') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                                arrWinner.push(3, 4, 5)
                                winnerX++
                            }
                            if (arr[3] == '3') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '8' && arr[2] == '6') {
                            if (arr[3] == '3' || arr[3] == '5') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '2') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '8' && arr[2] == '5') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerX++
                            }
                            if (arr[3] == '6') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '4' && arr[2] == '8') {
                            if (arr[3] != '3') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                arrWinner.push(0, 3, 6)
                                winnerX++
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '4' && arr[2] == '2') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                                arrWinner.push(0, 3, 6)
                                winnerX++
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '1' && arr[2] == '8') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '2') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '4' && arr[2] == '6') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '4' && arr[2] == '5') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                                arrWinner.push(0, 3, 6)
                                winnerX++
                            }
                            if (arr[3] == '6') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '5' && arr[2] == '8') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                                arrWinner.push(2, 4, 6)
                                winnerX++
                            }
                            if (arr[3] == '6') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '1' && arr[1] == '4' && arr[2] == '3') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '6') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '0' && arr[2] == '7') {
                            if (arr[3] != '5') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(3, 4, 5)
                            }
                            if (arr[3] == '5') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '1' && arr[2] == '8') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 3, 6)
                            }
                            if (arr[3] == '3') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '5' && arr[2] == '0') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(1, 4, 7)
                            }
                            if (arr[3] == '7') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '7' && arr[2] == '8') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 3, 6)
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '8' && arr[2] == '3') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(1, 4, 7)
                            }
                            if (arr[3] == '7') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '2' && arr[1] == '6' && arr[2] == '1') {
                            if (arr[3] != '8') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 4, 8)
                            }
                            if (arr[3] == '8') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '2' && arr[2] == '8') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '6') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '4' && arr[2] == '1') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '2') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '4' && arr[2] == '2') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '7') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '4' && arr[2] == '6') {
                            if (arr[3] != '8') {
                                div[8].innerHTML = 'X'
                                div[8].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(2, 5, 8)
                            }
                            if (arr[3] == '8') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '4' && arr[2] == '7') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 1, 2)
                            }
                            if (arr[3] == '2') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '4' && arr[2] == '8') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 1, 2)
                            }
                            if (arr[3] == '1') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '5' && arr[2] == '8') {
                            if (arr[3] == '1') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '6') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '7') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(2, 4, 6)
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '6' && arr[2] == '8') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(1, 4, 7)
                            }
                            if (arr[3] == '1') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '7' && arr[2] == '8') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '2') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '3' && arr[1] == '8' && arr[2] == '1') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '6') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '1' && arr[2] == '2') {
                            if (arr[3] == '3') {
                                div[8].innerHTML = 'O'
                                div[8].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(6, 7, 8)
                            }
                            if (arr[3] == '8') {
                                div[3].innerHTML = 'O'
                                div[3].setAttribute('data-status', 'on')
                                winnerO++
                                arrWinner.push(0, 3, 6)
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '1' && arr[2] == '3') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '2') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '1' && arr[2] == '5') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 3, 6)
                            }
                            if (arr[3] == '6') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '1' && arr[2] == '6') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '1' && arr[2] == '8') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 3, 6)
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '2' && arr[2] == '3') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '7') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '5' && arr[2] == '6') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 1, 2)
                            }
                            if (arr[3] == '1') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '7' && arr[2] == '2') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 3, 6)
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '3' && arr[2] == '1') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '2') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '3' && arr[2] == '2') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '7') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '3' && arr[2] == '6') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 1, 2)
                            }
                            if (arr[3] == '1') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '3' && arr[2] == '7') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 1, 2)
                            }
                            if (arr[3] == '2') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '3' && arr[2] == '8') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 1, 2)
                            }
                            if (arr[3] == '1') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '6' && arr[2] == '1') {
                            if (arr[3] != '5') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '5') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '4' && arr[1] == '8' && arr[2] == '1') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '0' && arr[2] == '7') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '2') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '1' && arr[2] == '7') {
                            if (arr[3] == '0') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '2') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 4, 6)
                            }
                            if (arr[3] == '3') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 4, 6)
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '2' && arr[2] == '7') {
                            if (arr[3] != '0') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 4, 8)
                            }
                            if (arr[3] == '0') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '3' && arr[2] == '0') {
                            if (arr[3] == '2') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(6, 7, 8)
                            }
                            if (arr[3] == '7') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '1') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(2, 4, 6)
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '4' && arr[2] == '0') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(1, 4, 7)
                            }
                            if (arr[3] == '7') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '4' && arr[2] == '1') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(6, 7, 8)
                            }
                            if (arr[3] == '6') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '4' && arr[2] == '2') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(6, 7, 8)
                            }
                            if (arr[3] == '7') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '4' && arr[2] == '6') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '1') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '4' && arr[2] == '7') {
                            if (arr[3] != '0') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '0') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '6' && arr[2] == '0') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '1') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '5' && arr[1] == '7' && arr[2] == '0') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '2') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '0' && arr[2] == '5') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(1, 4, 7)
                            }
                            if (arr[3] == '1') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '1' && arr[2] == '8') {
                            if (arr[3] != '5') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '5') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '2' && arr[2] == '7') {
                            if (arr[3] != '0') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 4, 8)
                            }
                            if (arr[3] == '0') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '3' && arr[2] == '8') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(1, 4, 7)
                            }
                            if (arr[3] == '1') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '5' && arr[2] == '0') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '1') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '7' && arr[2] == '0') {
                            if (arr[3] != '5') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(3, 4, 5)
                            }
                            if (arr[3] == '5') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '6' && arr[1] == '8' && arr[2] == '1') {
                            if (arr[3] != '5') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(3, 4, 5)
                            }
                            if (arr[3] == '5') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '0' && arr[2] == '5') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '6') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '1' && arr[2] == '0') {
                            if (arr[3] != '6') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '6') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '2' && arr[2] == '0') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '3') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '3' && arr[2] == '0') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '2') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '4' && arr[2] == '0') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '4' && arr[2] == '2') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '4' && arr[2] == '3') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '2') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '4' && arr[2] == '5') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '2') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '4' && arr[2] == '6') {
                            if (arr[3] != '0') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 1, 2)
                            }
                            if (arr[3] == '0') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '5' && arr[2] == '0') {
                            if (arr[3] != '2') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(2, 4, 6)
                            }
                            if (arr[3] == '2') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '7' && arr[1] == '6' && arr[2] == '0') {
                            if (arr[3] != '5') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(3, 4, 5)
                            }
                            if (arr[3] == '5') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '0' && arr[2] == '1') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '3') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '1' && arr[2] == '2') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(0, 3, 6)
                            }
                            if (arr[3] == '3') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '2' && arr[2] == '3') {
                            if (arr[3] != '7') {
                                div[7].innerHTML = 'X'
                                div[7].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(1, 4, 7)
                            }
                            if (arr[3] == '7') {
                                div[6].innerHTML = 'X'
                                div[6].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '3' && arr[2] == '2') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                            }
                            if (arr[3] == '1') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '5' && arr[2] == '6') {
                            if (arr[3] != '1') {
                                div[1].innerHTML = 'X'
                                div[1].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(1, 4, 7)
                            }
                            if (arr[3] == '1') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '6' && arr[2] == '1') {
                            if (arr[3] != '5') {
                                div[5].innerHTML = 'X'
                                div[5].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(3, 4, 5)
                            }
                            if (arr[3] == '5') {
                                div[2].innerHTML = 'X'
                                div[2].setAttribute('data-status', 'on')
                            }
                        }
                        if (arr[0] == '8' && arr[1] == '7' && arr[2] == '2') {
                            if (arr[3] != '3') {
                                div[3].innerHTML = 'X'
                                div[3].setAttribute('data-status', 'on')
                                winnerX++
                                arrWinner.push(3, 4, 5)
                            }
                            if (arr[3] == '3') {
                                div[0].innerHTML = 'X'
                                div[0].setAttribute('data-status', 'on')
                            }
                        }
                    }
                }
                arrWinner.forEach((item) => {
                    div[item].style.background = 'black'
                    div[item].style.color = 'aqua'
                })
                if (arrWinner.length == 3) {
                    gameTable.setAttribute('inert', true)

                    if (div[arrWinner[0]].innerHTML == 'O') {
                        spanPlayer1.innerHTML = winnerO
                        fourth.style.zIndex = '30'
                        fourth.innerHTML = 'Player 1 wins!!'
                        // fourth.style.transition = '1.5s'
                    } else if (div[arrWinner[0]].innerHTML == 'X') {
                        spanPlayer2.innerHTML = winnerX
                        fourth.style.zIndex = '30'
                        fourth.innerHTML = 'Player 2 wins!!'
                        // fourth.style.transition = '1.5s'
                    }
                    // console.log(winnerX);
                    // console.log(winnerO);
                    reset()
                    arrWinner = []
                }
                let num = 0
                div.forEach((val) => {
                    if (val.innerHTML == '') {
                        num++
                    }
                })
                if (num == 0 && arrWinner.length != 3) {
                    fourth.style.zIndex = '30'
                    fourth.innerHTML = 'It was a draw'
                    reset()
                }
                console.log(arrWinner);
            }
        })
    })
}

function reset() {
    setTimeout(() => {
        div.forEach((value) => {
            value.innerHTML = ''
            value.style.background = '#1b342a'
            value.style.color = 'white'
            fourth.style.zIndex = '-20'
            value.setAttribute('data-status', 'off')
            arr = []
        })
        gameTable.removeAttribute('inert')
    }, 2000);
}