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

// function firstWordUpperCase(str, callback){
//     let newStr = str.split(' ')
//     let upperFirst = newStr[0].toUpperCase()
//     newStr[0] = upperFirst
//     return callback(newStr.join(' '))
// }

// function dashBetweenWords(str){
//     return str.join('-')
// }

// console.log(firstWordUpperCase("Life is your last chance", dashBetweenWords))

// ============================================


function firstWordUpperCase(str, callback) {
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
            } else if(str[i]==="o") {
                temp = temp+"bo"
            } else if(str[i]==="a") {
                temp = temp+"ba"
            }else if(str[i]==="i") {
                temp = temp+"bi"
            } else if(str[i]==="u" && str[i-1]!="o") {
                temp = temp+"bu"    
            } else if(str[i]==="e" && str[i+1]!=" " && str[i+1]!=="," && str[i+1]!==".") {
                temp = temp+"be"
            } else if (str[i]===' ' || i == str.length-1){
                toBet += temp
                temp = ""
            }   
         }
    return toBet
}

console.log(firstWordUpperCase("Life is your last chance, motherfucker", toBetLang))

// ===============================