// assign X to player 1 and 0 to player 2
const playerOne = 'X'
const playerTwo = 'O'
let output = document.querySelector('#display')
let boxes = document.querySelectorAll('.box')
let count = 0
let counter = []
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const reset = document.querySelector('.reset')

// players' consecutive entries on box clicks
for (i = 1; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function () {
        if (count == 0) {
            // this if statement makes it impossible for players to make further entries once a winner has been declared
            if(output.textContent == ''){
            // this if statement makes it impossible for players to alter other players entries
            if(this.textContent == ''){
            this.textContent = playerOne
            counter.push(this.textContent)
            count -= 1
            // }
            //console.log(`${event.button}`)
            // if counter is at least 5, check if winner exists
            if (counter.length >= 5) {
                if ((one.textContent != '' && two.textContent != '' && three.textContent != '') && (one.textContent == two.textContent && two.textContent == three.textContent)) {
                    output.style.color = 'white'
                    output.textContent = 'player one wins!'
                    one.style.backgroundColor = 'white'
                    two.style.backgroundColor = 'white'
                    three.style.backgroundColor = 'white'
                    // reload window after 5 seconds to start afresh
                } else if ((four.textContent != '' && five.textContent != '' && six.textContent != '') && (four.textContent == five.textContent && five.textContent == six.textContent)) {
                    output.style.color = 'white'
                    output.textContent = 'player one wins!'
                    four.style.backgroundColor = 'white'
                    five.style.backgroundColor = 'white'
                    six.style.backgroundColor = 'white'
                } else if ((seven.textContent != '' && eight.textContent != '' && nine.textContent != '') && (seven.textContent == eight.textContent && eight.textContent == nine.textContent)) {
                    output.style.color = 'white'
                    output.textContent = 'player one wins!'
                    seven.style.backgroundColor = 'white'
                    eight.style.backgroundColor = 'white'
                    nine.style.backgroundColor = 'white'
                } else if ((one.textContent != '' && four.textContent != '' && seven.textContent != '') && (one.textContent == four.textContent && four.textContent == seven.textContent)) {
                    output.style.color = 'white'
                    output.textContent = 'player one wins!'
                    one.style.backgroundColor = 'white'
                    four.style.backgroundColor = 'white'
                    seven.style.backgroundColor = 'white'
                } else if ((two.textContent != '' && five.textContent != '' && eight.textContent != '') && (two.textContent == five.textContent && five.textContent == eight.textContent)) {
                    output.style.color = 'white'
                    output.textContent = 'player one wins!'
                    two.style.backgroundColor = 'white'
                    five.style.backgroundColor = 'white'
                    eight.style.backgroundColor = 'white'
                } else if ((three.textContent != '' && six.textContent != '' && nine.textContent != '') && (three.textContent == six.textContent && six.textContent == nine.textContent)) {
                    output.style.color = 'white'
                    output.textContent = 'player one wins!'
                    three.style.backgroundColor = 'white'
                    six.style.backgroundColor = 'white'
                    nine.style.backgroundColor = 'white'
                } else if ((one.textContent != '' && five.textContent != '' && nine.textContent != '') && (one.textContent == five.textContent && five.textContent == nine.textContent)) {
                    output.style.color = 'white'
                    output.textContent = 'player one wins!'
                    one.style.backgroundColor = 'white'
                    five.style.backgroundColor = 'white'
                    nine.style.backgroundColor = 'white'
                } else if ((three.textContent != '' && five.textContent != '' && seven.textContent != '') && (three.textContent == five.textContent && five.textContent == seven.textContent)) {
                    output.style.color = 'white'
                    output.textContent = 'player one wins!'
                    three.style.backgroundColor = 'white'
                    five.style.backgroundColor = 'white'
                    seven.style.backgroundColor = 'white'
                }
            }}}
        } else {
            if(output.textContent == ''){
             if (this.textContent == '') {
            this.textContent = playerTwo
            counter.push(this.textContent)
            count += 1
            
            // if counter is at least 5, check if winner exists
            if (counter.length >= 5) {
                if ((one.textContent != '' && two.textContent != '' && three.textContent != '') && (one.textContent == two.textContent && two.textContent == three.textContent)) {
                    output.style.color = 'white'
                    output.textContent = 'player two wins!'
                    one.style.backgroundColor = 'white'
                    two.style.backgroundColor = 'white'
                    three.style.backgroundColor = 'white'
                } else if ((four.textContent != '' && five.textContent != '' && six.textContent != '') && (four.textContent == five.textContent && five.textContent == six.textContent)) {
                    output.style.color = 'white'
                    output.textContent = 'player two wins!'
                    four.style.backgroundColor = 'white'
                    five.style.backgroundColor = 'white'
                    six.style.backgroundColor = 'white'
                } else if ((seven.textContent != '' && eight.textContent != '' && nine.textContent != '') && (seven.textContent == eight.textContent && eight.textContent == nine.textContent)) {
                    output.style.color = 'white'
                    output.textContent = 'player two wins!'
                    seven.style.backgroundColor = 'white'
                    eight.style.backgroundColor = 'white'
                    nine.style.backgroundColor = 'white'
                } else if ((one.textContent != '' && four.textContent != '' && seven.textContent != '') && (one.textContent == four.textContent && four.textContent == seven.textContent)) {
                    output.style.color = 'white'
                    output.textContent = 'player two wins!'
                    one.style.backgroundColor = 'white'
                    four.style.backgroundColor = 'white'
                    seven.style.backgroundColor = 'white'
                } else if ((two.textContent != '' && five.textContent != '' && eight.textContent != '') && (two.textContent == five.textContent && five.textContent == eight.textContent)) {
                    output.style.color = 'white'
                    output.textContent = 'player two wins!'
                    two.style.backgroundColor = 'white'
                    five.style.backgroundColor = 'white'
                    eight.style.backgroundColor = 'white'
                } else if ((three.textContent != '' && six.textContent != '' && nine.textContent != '') && (three.textContent == six.textContent && six.textContent == nine.textContent)) {
                    output.style.color = 'white'
                    output.textContent = 'player two wins!'
                    three.style.backgroundColor = 'white'
                    six.style.backgroundColor = 'white'
                    nine.style.backgroundColor = 'white'
                } else if ((one.textContent != '' && five.textContent != '' && nine.textContent != '') && (one.textContent == five.textContent && five.textContent == nine.textContent)) {
                    output.style.color = 'white'
                    output.textContent = 'player two wins!'
                    one.style.backgroundColor = 'white'
                    five.style.backgroundColor = 'white'
                    nine.style.backgroundColor = 'white'
                } else if ((three.textContent != '' && five.textContent != '' && seven.textContent != '') && (three.textContent == five.textContent && five.textContent == seven.textContent)) {
                    output.style.color = 'white'
                    output.textContent = 'player two wins!'
                    three.style.backgroundColor = 'white'
                    five.style.backgroundColor = 'white'
                    seven.style.backgroundColor = 'white'
                    }
            }
        }}}
    })
}

reset.addEventListener('click', function(){
    location.reload()
})
//  game reset
// window.setTimeout(function () {
//     location.reload()
// }, 5000)
if(counter.length === 9 && output.textContent === ''){
    output.textContent = 'game is tied!'
    output.style.color = 'white'
}
// if no winner after 9th entry, then tie.



