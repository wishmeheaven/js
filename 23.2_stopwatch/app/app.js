// setInterval(currentTime, 1000)

// The following exercise contains the following subjects:
//  intervals
// Instructions
// Create a web page that has a stopwatch with a start and stop button.
// • The stop watch should have milliseconds, seconds and minutes.
// • When you click on the start button for the first time, the timer will start
// running(from 00: 00: 00 to 60: 00: 00 minutes)
// • When you click on the stop button, it will freeze the time that elapsed
// from the start.
// • When you click start again it will continue counting the time, from
// where it stopped.

const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')
const stopwatch = document.getElementById('stopwatch')
const lap = document.getElementById('lap')
const lapList = document.getElementById('lapList')

let hh = 0
let mm = 0
let ss = 0
let ms = 0
let interval

function startTimer() {
    interval = setInterval(() => {
        ms++
        if (ms == 100) {
            ms = 0
            ss++
        }
        if (ss == 60) {
            ss = 0
            mm++
        }
        if (mm == 60) {
            mm = 0
            hh++
        }
        stopwatch.innerHTML = `${hh < 10 ? '0' + hh : hh}:${mm < 10 ? '0' + mm : mm}:${ss < 10 ? '0' + ss : ss}:${ms < 10 ? '0' + ms : ms}`
    }, 10)
}

function stopTimer() {
    clearInterval(interval)
}

    

