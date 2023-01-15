function isString(str, callback) {
    if (typeof(str) === 'string'){
    callback(str);
    }
}

function myCallback(word) {
    console.log(word);
}

isString("Stranger Things", myCallback);


// ==========================================

function firstWordUpperCase(str, callback){
    let newStr = str.split(' ')
    let upperFirst = newStr[0].toUpperCase()
    newStr[0] = upperFirst
    return callback(newStr)
}

function dashBetweenWords(str){
    return str.join('-')
}

console.log(firstWordUpperCase("Life is your last chance", dashBetweenWords))

// ============================================


function firstWordUpperCase2(str, callback) {
    let newStr = str.split(' ')
    let upperFirst = newStr[0].toUpperCase()
    newStr[0] = upperFirst
    return callback(newStr.join(' '))
}

function toBetLang(str){
    // let betArr = ["ba", "be", "bi", "bo", "bu"]
    let toBet = ""
    let temp = ""
    for(let i = 0; i < str.length; i++)
    {
        temp += str[i]

            if (i == str.length-1) {
                toBet += temp
            } else if (str[i] == "o" && str[i - 1] == "o") {
                temp = temp + "boo"
            } else if(str[i]==="o" && str[i+1]!="o") {
                temp = temp+"bo"
            } else if (str[i] === "a" && str[i - 1] === "e") {
                temp = temp + "bea"
            } else if(str[i]==="a") {
                temp = temp+"ba"
            }else if(str[i]==="i") {
                temp = temp+"bi"
            } else if(str[i]==="u" && str[i-1]!="o") {
                temp = temp+"bu"    
            } else if(str[i]==="e" && str[i+1]!=" " && str[i+1]!=="," && str[i+1]!=="." && str[i+1]!=="a") {
                temp = temp+"be"
            } else if (str[i]===' ' || i == str.length-1){
                toBet += temp
                temp = ""
            }   
         }
    return toBet
}

console.log(firstWordUpperCase2("Life is your last chance, motherfucker", toBetLang))
console.log(firstWordUpperCase2("oh that's really cool", toBetLang))

// ===============================

function reversing(word, callback){
    let reverse = ""
    for(let i = word.length-1 ; i >= 0 ; i--) {
        reverse += word[i]
    }
    callback(reverse)
}

function rebirth(reversed){
    rebirth = ""
    for (let i = reversed.length-1; i >=0 ;i--){
        rebirth += reversed[i]
    }
    console.log(`a reversing ${reversed} will rebirth ${rebirth}`)
}

reversing("spectacular", rebirth) 