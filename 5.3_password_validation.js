function checkPass(password){

    // if (password.length >= 7) {
    //     return password.length > 7 ? "Strong" : "Strong enough"
    // } else if (password.search(/[0-9]/) === -1 && password.length < 7)
    //     return ("Very Weak")
    //     else return "Weak"

    // ========= only ternary =======

    return password.length >= 7 ?
        (password.search('[A-Z]') !== -1 && password.search(/[0-9]/) !== -1) ?
        "Very Strong" : "Strong Enough" :
        (password.search(/[0-9]/) === -1 && password.length < 7) ? 
        "Very Weak" : "Weak"
}

console.log(checkPass("asd4fRDd"))


console.log(checkPass("asdF"))
