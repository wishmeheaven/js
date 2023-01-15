function isString(str, callback) {
    if (typeof(str) === 'string'){
    callback(str);
    }
}

function myCallback(word) {
    console.log(word);
}

isString("Mordechai", myCallback);


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


