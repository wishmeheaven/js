function currentTime() {
    const date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    let randomColor = Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256)
    const clock = document.getElementById('clock')

    displayHH = hh < 10 ? `0${hh}` : hh
    displayMM = mm < 10 ? `0${mm}` : mm
    displaySS = ss < 10 ? `0${ss}` : ss

    ss++
    if (ss > 59) {
        ss = '00'
        mm++
    }
    if (mm > 59) {
        mm = '00'
        hh++
    }
    if (hh > 23) {
        hh == '00'
    }



    document.getElementById('clock').innerHTML = `${displayHH}:${displayMM}:${displaySS}`

        if (displaySS % 10 === 0) {
        clock.style.boxShadow = `inset 1px 1px 15px 2px rgb(${randomColor})`

        setTimeout(function () {
            clock.style.boxShadow = `inset -5px -50px 50px 1px rgb(${randomColor})`;
        }, 1500);
    }

    

}

setInterval(currentTime, 1000)


